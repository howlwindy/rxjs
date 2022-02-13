import { mount } from '@vue/test-utils'
import Home from '../../src/pages/Home.vue'

describe('Home.vue', () => {
  it('renders', () => {
    const wrapper = mount(Home)
    expect(wrapper.html()).toContain('Rxjs')
  })
})
