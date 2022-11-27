import React from 'react';
const bigInversion = (props) => {
  
  return (
    <div>
        <h1>hi</h1>
        <h1>{props.firstName},{props.lastName}</h1>
        <p>age:{props.age}</p>
        <p>haircolor: {props.hairColor}</p>
    </div>
  )
}

export default bigInversion;