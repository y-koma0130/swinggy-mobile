module.exports = (api) => {
  api.cache(true);
  const presets = [
    'module:metro-react-native-babel-preset',
  ]
  const plugins = [
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "react-native-dotenv",
        path: ".env",
        safe: true,
        allowUndefined: true,
        verbose: false
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
};
