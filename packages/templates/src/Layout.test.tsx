import { shallow } from 'enzyme'
import { Layout } from './Layout'

describe('Layout', () => {
  it('render', () => {
    const wrapper = shallow(<Layout>hello</Layout>)
    expect(wrapper).toMatchSnapshot()
  })
})
