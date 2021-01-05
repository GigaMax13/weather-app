module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset'
    ],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: 'react-native-dotenv',
          allowUndefined: true,
          blacklist: null,
          whitelist: null,
          path: '.env',
          safe: true
        }
      ]
    ]
  };
};
