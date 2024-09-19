import React from 'react'
import { useState } from 'react';
//import { Button } from 'react-bootstrap/Button';

let bulboff= "https://5.imimg.com/data5/AU/ZY/UK/SELLER-86701761/led-bulb-10-volt-500x500.jpg"
let bulbon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLCn2iYZaavDimcpgwZtKYOZXOUfXJyfsEjQ&s"


const Bulbs = () => {
   
   const [ison, setison] = useState(false);
    const handleBtnClick = () => {
        setison(!ison);
        console.log(ison);
    }


  return (
   
    <>
       <div className="bulb">
       <img src={ison ? bulboff : bulbon} 
        alt="bulb" />
        <button className={ison ? "btn-on" : "btn-off"} onClick={handleBtnClick}>Click Me</button>

       </div>
    </>
    
  
  )
}

export default Bulbs