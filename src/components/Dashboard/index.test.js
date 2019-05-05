import React from 'react'
import Dashboard from './'
import { shallow } from 'enzyme'

const wrapper = shallow(<Dashboard />)

describe('Dashboard', () => {
  it('renders awesomely!', () => {
    expect(wrapper.exists()).toBe(true)
  })
})