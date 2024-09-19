import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
import Form from './Components/Form'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 style={{textAlign:'center',color:'#ff6347'}}>Hotel Room Booking Todo Form </h1>
      <Form />
    </>
  )
}

export default App
