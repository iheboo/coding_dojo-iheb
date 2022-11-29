import './App.css';
import {useState} from 'react'
function App() {

  const [pkm,setPkm]= useState([]);
  const pkmfetch =( )=>{

    fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response =>  response.json() )
          .then(response => setPkm(response.results))
          .catch(err=>{ console.log(err)});
  }
  
  return (
    <div className="App">
      <div>
        <button onClick={pkmfetch} >all pokemon </button>
      </div>
      {/* {JSON.stringify(pkm)} */}
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
