import Appp from './components/appp';
const peopleArr=[
  {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
  {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"},
  {"firstName":"Millard", "lastName":"Fillmore","age":50,"hairColor":"Brown"},
  {"firstName":"Maria", "lastName":"Smith","age":62,"hairColor":"Brown"}
]
function App() {
  return (
    <fieldset>
      <legend>app.js</legend>
      <div>
        {peopleArr.map(p=>{
          return<Appp firstName={p.firstName} lastName={p.lastName} age={p.age} hairColor={p.hairColor}/>
        })}
      </div>
    </fieldset>
  );
}

export default App;
