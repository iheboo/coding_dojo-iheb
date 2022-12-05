import React from 'react';
import './App.css';
import Planet from './components/Planet';
import People from './components/People';
import Form from './components/Form';
import {
  Routes,
  Route
} from "react-router-dom";

// { butten of search don't work }
function App() {
  return (
    <div>
      <Form/>
      <Routes>
        <Route path="/People/:id/" element={ <People/>}/>
      </Routes>
      <Routes>
        <Route path="/Planet/:id/" element={ <Planet/>}/>
      </Routes>
      {/* --------------- */}
      {/* <Planet/>
      <People/> */}
    </div>
  );
}

export default App;
