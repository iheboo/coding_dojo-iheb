import React from 'react'
import { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Main = () => {
    const[all,setAll]= useState ([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/pro')
             .then(res =>{console.log(res.data);setAll(res.data)})
             .catch(err=>console.log("❌❌",err))
    },[])
  return (
    <div>
        {all.map((one)=>{
            return(
                <div key={one._id}>
                    <Link>{one.title}</Link>
                </div>
            )
        })}
    </div>
  )
}

export default Main