import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Main from './Main'

const From = (props) => {
  const [inputs,setInputs]=useState({title:"",price:0,Description:""})
  const craeteProj =(e)=>{
    e.preventDefault();
    const newPro ={
      title:inputs.title,
      price:inputs.price,
      Description:inputs.Description
    }
    axios.post("http://127.0.0.1:8000/api/pro/new",newPro)
         .then(res=>{console.log(res.data)})
         .catch(err=> console.log(err))
  }
  return (
    <div>
      <div>
        {JSON.stringify(inputs)}
      </div>
        <form onSubmit={craeteProj}>
        <label >title:</label>
        <input onChange={(e)=> setInputs({...inputs,title:e.target.value})} value={inputs.title} />
        <label >price($):</label>
        <input onChange={(e)=> setInputs({...inputs,price:e.target.value})} value={inputs.price}/>
        <label >Description:</label>
        <input onChange={(e)=> setInputs({...inputs,Description:e.target.value})} value={inputs.Description}/>
        <button>create</button>
        </form>
        <Main/>
    </div>
  )
} 

export default From