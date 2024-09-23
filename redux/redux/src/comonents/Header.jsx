import React from 'react'
import { useSelector } from 'react-redux'
const Header = () => {
    const count = useSelector(state => state.counter.value)
  return (
    <div style={{fontSize: '30px', color: 'red'}}>this is my header {count} </div>
  )
}

export default Header