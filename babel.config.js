module.exports = api => {
  api.cache(true)
  return {
    plugins: ['lodash'],
    presets: ['next/babel'],
  }
}
