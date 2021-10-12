export default function getQueue() {
  const queue = {
    _tasks: [],

    _busy: false,

    add: function (task: any) {
      this._tasks.push(task);
      if (!this._busy) {
        this._process();
      }
    },

    asyncAdd: function (task: any) {
      return new Promise(resolve => {
        this._tasks.push({
          ...task,
          onTaskEnd: resolve,
        });
        if (!this._busy) {
          this._process();
        }
      });
    },

    _process: async function () {
      this._busy = true;
      const {task, args, context, onTaskEnd} = this._tasks.shift();
      let status, result, error;
      try {
        result = await Promise.resolve(
          task.apply(context || null, [...(Array.isArray(args) ? args : [])]),
        );
        status = 'success';
      } catch (err) {
        error = err;
        console.warn(err);
        status = 'failure';
      } finally {
        this._onFinish();
        if (typeof onTaskEnd === 'function') {
          onTaskEnd({
            result,
            status,
            error,
          });
        }
      }
    },

    _onFinish: function () {
      this._busy = false;
      if (this._tasks.length) {
        this._process();
      }
    },
  };

  for (let key in queue) {
    if (typeof queue[key] === 'function') {
      queue[key] = queue[key].bind(queue);
    }
  }

  return queue;
}
