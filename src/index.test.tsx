import React from 'react'
import 'react-native'
import Index from '.'

// Note: test renderer must be required after react-native.
import { create } from 'react-test-renderer'

it('renders correctly', () => {
  const tree = create(<Index />)
  expect(tree.toJSON()).toMatchSnapshot()
})
