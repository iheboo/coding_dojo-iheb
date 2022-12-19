import React,{useState} from 'react'
import axios from 'axios'

const Form = () => {
    const [title, setInput] = useState('');
    const [price, setPrice] = useState(0);
    const [discreption, setDesc] = useState('')
    const submitHandler = e=>{
        e.preventDefaukt();
        const newPro_mana ={title:title,price:price,discreption:discreption}
        console.log(newPro_mana);
        axios.post('http://localhost:8000/api/pro_mana/new',newPro_mana)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    } 


  return (
    <>
    <form onSubmit={submitHandler}>
        <label >title:</label>
        <input type="text" onChange={(e) => {setInput(e.target.value)}}/>
        <label >price:</label>
        <input type="number" onChange={(e) => {setPrice(e.target.value)}}/>
        <label >discreption:</label>
        <input type="text" onChange={(e) => {setDesc(e.target.value)}}/>
        <button>create</button>
    </form>
    </>
  )
}
export default Form