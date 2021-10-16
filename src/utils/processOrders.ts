function getUniqueId(arr: any[]) {
  let ids = new Set();
  arr.map(ar => ids.add(ar.customer_id));
  const idsArray = Array.from(ids);
  return idsArray;
}

export function batchOrderToCustomer(arr: any[]) {
  const uniqueIds = getUniqueId(arr);
  let processOrders: any = [];
  for (let id of uniqueIds) {
    let customerOrder = arr.filter(order => order.customer_id === id);
    processOrders = [...processOrders, customerOrder];
  }
  return processOrders;
}
