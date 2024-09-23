import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,multiple } from './slice/Counterslice'
import Header from './comonents/Header'
import { incrementCart,decrementCart,multipleCart } from './slice/CartSlice'
import Footer from './comonents/Footer'

function App() {
  const count = useSelector(state => state.counter.value)
  const cart = useSelector(state => state.cart.value)
  const dispatch = useDispatch()

  return (
    <div>
    <Header/> 
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Multiple value"
          onClick={() => dispatch(multiple())}
        >
          multiple
        </button>
      </div>


      <div>
        <button
          aria-label="IncrementCart value"
          onClick={() => dispatch(incrementCart())}
        >
          Increment
        </button>
        <span>{cart}</span>
        <button
          aria-label="DecrementCart value"
          onClick={() => dispatch(decrementCart())}
        >
          Decrement
        </button>
        <button
          aria-label="MultipleCart value"
          onClick={() => dispatch(multipleCart())}
        >
          multiple
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default App
