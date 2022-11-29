import Tab from './components/Tab';
import './App.css';



function App() {
  const tab1=["iheb","ahani","ala"];
  const tab2=["ihebe","yahani","hala"];
  const tab3=["ihebz","kahani","kala"];
  
  return (
    <div className="App">

      <Tab tab1={tab1} tab2={tab2} tab3={tab3}/>
    </div>
  );
}

export default App;
