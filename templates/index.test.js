import React from 'react'
import COMPONENT_NAME from './'
import { shallow } from 'enzyme'

const wrapper = shallow(<COMPONENT_NAME />)

describe('COMPONENT_NAME', () => {
  it('renders awesomely!', () => {
    expect(wrapper.exists()).toBe(true)
  })
})