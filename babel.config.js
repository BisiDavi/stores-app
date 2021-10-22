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

module.exports = {
  presets,
  plugins,
};
