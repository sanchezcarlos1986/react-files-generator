import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import StyleWrapper from './style'

function COMPONENT_NAME(props) {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    setGreeting('Your new component is: ')
  }, [])

  return <StyleWrapper className={`COMPONENT_NAME`}>
    { greeting } COMPONENT_NAME
  </StyleWrapper>
}

// @Proptypes
COMPONENT_NAME.propTypes = {

}

export default COMPONENT_NAME