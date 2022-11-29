import './App.css';
import axios from 'axios';
import { useState } from 'react';
// import { useEffect } from 'react';

function App() {
  const [pkm,setPkm]= useState([]);
//   useEffect(()=>{
//     axios.get('https://pokeapi.co/api/v2/pokemon')
//         .then(response=>{setPkm(response.data.results)})
//         .catch((err)=>{console.log(err)})
// }, []); 
const axiPkm =( ) =>{
  axios.get('https://pokeapi.co/api/v2/pokemon')
 .then(response=>{setPkm(response.data.results)})
 .catch((err)=>{console.log(err)})
}
  return (
    <div className="App">
      <div>
      {/* <button onClick={useEffect} >all pokemon </button> */}
      <button onClick={axiPkm}>hi pokemon</button>
      </div>
        {pkm.map((pk,i)=>{
          return (
            <ul key={i}>
            <li>{pk.name?pk.name:"N/A"}</li>
            </ul>
          )
        })}
    </div>
  );
}

export default App;
