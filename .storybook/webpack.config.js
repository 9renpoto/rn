module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
      },
    ],
  })

  config.resolve.alias = {
    'react-native': 'react-native-web',
  }
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
