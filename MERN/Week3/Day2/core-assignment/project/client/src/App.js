import {Route,Routes,Link}from 'react-router-dom'
import React from "react";
import From from './components/From';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <h1>🙋‍♀️HI🙋‍♂️</h1>
      <Link to="/create">Product Mandger</Link>
      <hr/>
      <Routes>
        <Route path="/create" element={<From/>}/>
        <Route path='/all title' element={<Main/>}/>
      </Routes>
      <h1> </h1>


    </div>
  );
}

export default App;
