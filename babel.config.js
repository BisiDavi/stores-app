module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.png',
          '.jpg',
        ],
        alias: {
          '@components': './components',
          '@navigation': './navigation',
          '@screens': './screens',
          '@hooks': './hooks',
          '@assets': './assets',
          '@json': './json',
          '@customTypes': './customTypes',
          '@utils': './utils',
          '@network': './network',
          '@context': './context',
          '@store': './store',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
