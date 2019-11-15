import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'react-native-elements'
import { Layout } from './Layout'

describe('Layout', () => {
  it('render', () => {
    const wrapper = shallow(
      <Layout>
        <Button title="hello" />
      </Layout>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
