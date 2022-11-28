import Box from './components/box';
import './App.css';
import Display from './components/display';
import {useState} from 'react';

function App() {
  const [box, setBox] = useState([{color:'red',height:'100px',width:'100px'},{color:'green',height:'100px',width:'100px'},{color:'pink',height:'100px',width:'100px'}]);
  const onNewBox = (color,height,width)=>{

    setBox([...box,{color:color,height:height,width:width}])
    
  }
  return (
    <div className="App">
      <div>
      <Box onNewBox={onNewBox}/>
      </div>
      <Display boxs={box}/>
    </div>
  );
}

export default App;
