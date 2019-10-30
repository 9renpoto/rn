module.exports = api => {
  api.cache(true)
  return {
    plugins: [
      'lodash',
      '@babel/plugin-proposal-class-properties',
      'babel-plugin-macros',
    ],
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  }
}
