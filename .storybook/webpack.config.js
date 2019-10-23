module.exports = async ({config: defaultConfig}) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loader: require.resolve('babel-loader'),
    options: {
      plugins: ['macros', 'react-native-web'],
      presets: ['module:metro-react-native-babel-preset'],
    },
  });

  defaultConfig.resolve.alias = {
    ...defaultConfig.resolve.alias,
    'react-native': 'react-native-web',
  };

  defaultConfig.resolve.extensions.push('.ts', '.tsx', '.jsx');

  return defaultConfig;
};
