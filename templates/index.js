import React, { useState, useEffect } from 'react'
import StyleWrapper from './style'

const COMPONENT_NAME = props => {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    setGreeting('Your new component is: ')
  }, [])

  return <StyleWrapper className={`COMPONENT_NAME`}>
    { greeting } COMPONENT_NAME
  </StyleWrapper>
}

export default COMPONENT_NAME