import React, { useState, useEffect } from 'react'
import StyleWrapper from './style'

const Dashboard = props => {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    setGreeting('Your new component is: ')
  }, [])

  return <StyleWrapper className={`Dashboard`}>
    { greeting } Dashboard
  </StyleWrapper>
}

export default Dashboard