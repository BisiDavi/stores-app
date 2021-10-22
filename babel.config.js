const presets = ['module:metro-react-native-babel-preset'];
const plugins = [];

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      '@': './src',
    },
  },
]);

plugins.push([
  'babel-plugin-inline-import',
  {
    extensions: ['.svg'],
  },
]);

plugins.push(['react-native-reanimated/plugin']);

module.exports = {
  presets,
  plugins,
};
