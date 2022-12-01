import React ,{useState}from 'react';
import './App.css';
import TodoList from './components/TodoList';
function App() {
     /*
  array destructure 
  */
  const[newTodo,setNewTodo]=useState("");
  const[todos,setTodo]=useState([]);
  //add Task
  const handilSubmit =e =>{
    e.prenvetDefual();
    if (newTodo.length===0){
        return;
    }
    const todoItem ={
        Text:newTodo,
        coplet:false
    };
    // ............................... if for not addind a empty  input
    setTodo([...todos,todoItem]);
    setNewTodo('');
    
  }
  const handleDelete=(delId) =>{
    const filterTodo=todos.filter((_todo,i)=>{
        return i !== delId;
    });
    setTodo(filterTodo);
  }
  const handlecoplet =(idx)=>{
    const uptodos = todos.map((todo,i)=>{
        if (idx===i)
        {todo.coplet !== todo.coplet}
        // const uptodo ={...todo,coplet:todo.coplet}
        // return uptodo
        return todo
    })
    setTodo(uptodos);
  }
  
  return (
    <div className="App">

      <TodoList todo={todo} key={i} handilSubmit={handilSubmit}i={i} handleDelete={handleDelete} handlecoplet={handlecoplet} />
    </div>
  );
}

export default App;
