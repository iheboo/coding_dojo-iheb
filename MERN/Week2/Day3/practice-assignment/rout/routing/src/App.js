import './App.css';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/home' element={<h1>welcome</h1>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </div>
  );
}

export default App;
