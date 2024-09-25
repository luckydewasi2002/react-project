import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
    const cart = useSelector(state => state.cart.value)
  return (
    <div style={{fontSize: '30px', color: 'blue'}}>this is  Footer {cart}</div>
  )
}

export default Footer

// {
//   data && data.map((item,index)=>(
//       <div key={index}>
      // <h1>{item.id}</h1>
      //     <h1>{item.title}</h1>
      //     <img src={item.image} alt=""/>
      //    <h1>{item.price}</h1>
      //    <h1>{item.description}</h1>
        
         
      //    <h1>{item.rating.rate}</h1>
      //    <h1>{item.rating.count}</h1>
      //    <h1>{item.category}</h1>
         
//       </div>
//   )
//   )
//  }