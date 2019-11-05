module.exports = api => {
  api.cache(true)
  return {
    plugins: [
      'lodash',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-export-default-from',
      'babel-plugin-macros',
    ],
    presets: [
      '@babel/preset-env',
      '@babel/preset-flow',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  }
}
