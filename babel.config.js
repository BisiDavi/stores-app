module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '../components/*': ['components/*'],
          '@navigation/*': ['navigation/*'],
          '../screens/*': ['screens/*'],
          '../hooks//*': ['hooks/*'],
          '../assets/*': ['assets/*'],
          '../json/*': ['json/*'],
          '../customTypes/*': ['customTypes/*'],
          '../utils/*': ['utils/*'],
          '@context/*': ['context/*'],
          '../network/*': ['network/*'],
          '../store/*': ['store/*'],
        },
      },
    ],
  ],
};
