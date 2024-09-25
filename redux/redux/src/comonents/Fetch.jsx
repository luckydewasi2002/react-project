import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Fetch = () => {
    
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const[search,setSearch] = useState('')

    useEffect(()=>{
       fetchApi()
    },[loading])

    const fetchApi = async() => {
        const response =await axios.get('https://fakestoreapi.com/products/category/jewelery')
        console.log(">>>>>response>>>>",response.data)
        setData(response.data)
        setLoading(false)
    }
    const filterData = data.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))
    //  const xyz = () => {
    //     setLoading(!loading)
    // }
  return (
    <div>
    <input type="text" value={search} placeholder='search your tittle' onChange={(e)=>setSearch(e.target.value)}/>

  
    

{loading ? (
  <h1 style={{color:"red"}} > Screen isLoading...</h1>) : (
  
   
    <div>
    
    <div>Fetch</div>

 
  {filterData && filterData.map((item,index)=>
    (
        <div key={index} className='jewellerybox' style={{width:"600px",height:"700px",border:"1px solid black",margin:"10px",padding:"10px",}}>
        <h1 style={{fontSize:"25px"}}>Id :- {item.id}</h1>
          <h1 style={{fontSize:"25px"}}>Tittle :- {item.title}</h1>
        <LazyLoadImage src={item.image} effect='blur' width="300px" height="300px"
        onLoad={()=>console.log(`next image loaded ${item.title}`)} />
         <h1 style={{fontSize:"25px"}}>Price :- {item.price}</h1>
         <h1 style={{fontSize:"25px"}}>Rating Rate :- {item.rating.rate}</h1>
         <h1 style={{fontSize:"25px"}}>Rating Count :- {item.rating.count}</h1>
         <h1 style={{fontSize:"25px"}}>Category :- {item.category}</h1>
         <h1 style={{fontSize:"25px"}}>description :- {item.description}</h1>
        </div>
    )
    
  )
  }
  </div>
    )
  
  }
    </div>
  )
}

export default Fetch