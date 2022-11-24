import Appp from './components/appp';
const text=["things i need to do"]
const say=["hi dojo !!"]
const list =["learn react","climb Mt. Everset","run a marathon","Feedthe dogs" ]
function App() {
  return (
    <fieldset>
      <legend>app.js</legend>
      <div className="App">
      <h1>{say}</h1>
      <h3>{text}</h3>
      <ul>{list.map((el,ix)=>{
        return <li key={ix}>{el}</li>
      })}</ul>

        <Appp/> 
      </div>
    </fieldset>
  );
}

export default App;
