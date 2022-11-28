import React ,{useState} from 'react'
 

const Box = (props) => {
    const [color,setColore]= useState("");
    const [width,setWidth]= useState("");
    const [height,setHeight]= useState("");

    const creatBox = (ev)=>{
        ev.prevenDefault();
        props.onNewBox( color,height,width );
    }
  return (
    <div>
        <form onSubmit={creatBox}>
            <label >color:</label>
            <input onChange={(e) => setColore(e.target.value)} value={color}/>
            <label >width:</label>
            <input onChange={(e) => setWidth(e.target.value)} value={width}/>
            <label >height:</label>
            <input onChange={(e) => setHeight(e.target.value)} value={height}/>
            
            <input type="submit" value="add" />
        </form>
    </div>
  );
};

export default Box