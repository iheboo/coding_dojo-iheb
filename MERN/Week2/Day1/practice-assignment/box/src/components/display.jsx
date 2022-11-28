import React from 'react'


const Display = (props) => {
  return (
    <div >
        {props.boxs.map((box,i)=>{
            return <div key={i} style={{height:box.height,width:box.width,backgroundColor:box.color}}></div>
            
        })}
    </div>
  )
}

export default Display