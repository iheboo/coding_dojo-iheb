// import React ,{useState} from 'react'
// import './App.css';
// // import uuid from 'react-uuid';
// const TodoList= (props) =>  {
//         /*
//   array destructure 
//   */
//   const[newTodo,setNewTodo]=useState("");
//   const[todos,setTodo]=useState([]);
//   //add Task
//   const handilSubmit =e =>{
//     e.prenvetDefual();
//     if (newTodo.length===0){
//         return;
//     }
//     const todoItem ={
//         Text:newTodo,
//         coplet:false
//     };
//     // ............................... if for not addind a empty  input
//     setTodo([...todos,todoItem]);
//     setNewTodo('');
    
//   }
// //   -------------------------------------------------------- delet
//   const handleDelete=(delId) =>{
//     const filterTodo=todos.filter((_todo,i)=>{
//         return i !== delId;
//     });
//     setTodo(filterTodo);
//   }
//   const handlecoplet =(idx)=>{
//     const uptodos = todos.map((todo,i)=>{
//         if (idx===i)
//         {todo.coplet !== todo.coplet}
//         // const uptodo ={...todo,coplet:!todo.coplet}
//         // return uptodo
//         return todo
//     })
//     setTodo(uptodos);
//   }
//   return (
//     <div className='main'>
//         <form onSubmit={handilSubmit}>
//             <div className='form'>
//                 <input  name='input' onChange={()=>{
//                     setNewTodo(target.value);
//                 }} value={newTodo}/>
//             </div>
//             <input type="submit" value='add' />
//         </form>
//             {todos.map((todo,i)=>{
//                 const todoClass =["bold","italic"];
//                 if (todo.coplet){
//                     todoClass.push('line-though')
//                 }
//             })}
//                 return
//                      <div >
//                         <input onChange={()=>{
//                          handlecoplet(i);
//                         }}  checked={todo.coplet} type="checkbox" />
//                         <span className={todocclass.jion(' ')}>{todo.Text}</span>

//                         <button onClick={(e)=>{
//                             handleDelete(i);
//                         }}>dele</button>
//                     </div>
//             ;
//     </div>
//   );
// };

// export default TodoList

import React, { useState, useEffect } from 'react';
// import './TodoList.css';
// import uuid from 'react-uuid';

const TodoList = () => {
  const [content, setContent] = useState('');
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  // GET INPUT VALUE
  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };

  // CREATE NEW TASK
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (content) {
      setList([
        ...list,
        { content, id: new Date().getTime().toString(), isCompleted: false }, // new Date().getTime().toString() or uudi()
      ]);

      // EMPTY INPUT
      setContent('');
    }
  };

  // DELETE TASK
  const removeTask = (id) => {
    const filtredList = list.filter((task) => task.id !== id);
    setList(filtredList);
  };

  // ADD TASK TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(list));
  }, [list]);

  return (
    <div className="main">
      <div className="form">
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="content"
            value={content}
            onChange={onChangeHandler}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
      <div className="tasks">
        {list.map((task) => {
          return (
            <div className="task" key={task.id}>
              <p
                style={
                  task.isCompleted
                    ? { textDecoration: 'line-through' }
                    : { textDecoration: 'none' }
                }
              >
                {task.content}
              </p>
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={(e) => {
                  setList((prevList) => {
                    const newList = prevList.map((item) =>
                      item.content === task.content
                        ? { ...item, isCompleted: !item.isCompleted }
                        : item
                    );
                    return newList;
                  });
                }}
              />
              <button onClick={() => removeTask(task.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
