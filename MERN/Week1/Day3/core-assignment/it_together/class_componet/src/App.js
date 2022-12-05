import React from 'react';

import PersonComponent from './components/PersonComonent';
const peopleArr =[
  {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
  {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"},
  {"firstName":"Millard", "lastName":"Fillmore","age":50,"hairColor":"Brown"},
  {"firstName":"Maria", "lastName":"Smith","age":62,"hairColor":"Brown"}
]


function App() {
  return (
    <div className="App">
      {peopleArr.map(p=>{
        return<PersonComponent firstName={p.firstName}  lastName={p.lastName} age={p.age}  hairColor={p.hairColor} />
      })}
    </div>
  );
}

export default App;
