import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
    const cart = useSelector(state => state.cart.value)
  return (
    <div style={{fontSize: '30px', color: 'blue'}}>this is  Footer {cart}</div>
  )
}

export default Footer