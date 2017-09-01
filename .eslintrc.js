/* @flow */
module.exports = {
  extends: [
    '@9renpoto/eslint-config-flowtype',
    '@9renpoto/eslint-config-react'
  ],
  plugins: ['jest'],
  env: {
    'jest/globals': true
  }
}
