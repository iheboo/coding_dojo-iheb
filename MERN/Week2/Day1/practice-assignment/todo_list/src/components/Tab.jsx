import React ,{useState} from 'react'

const Tab = (props) => {
  const [table , setTable]= useState(props.tab1)
  const handleClick =(e,value)=>{
    if (value===props.tab1){
      setTable(props.tab1)
    }
    else if (value===props.tab2){
      setTable(props.tab2)
    }
    else { setTable(props.tab3)}
  }

  return  (
    <div>
      
        <button onClick={(e)=> handleClick(e,props.tab1)}>tab1</button>
        <button onClick={(e)=> handleClick(e,props.tab2)}>tab2</button>
        <button onClick={(e)=> handleClick(e,props.tab3)}>tab3</button>
        <div>
          {table}
        </div>
    </div>
  )
}

export default Tab