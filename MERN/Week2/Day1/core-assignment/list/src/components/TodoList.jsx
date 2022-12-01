import React  from 'react'
import './App.css';
// import uuid from 'react-uuid';
const TodoList= (props) =>  {
 
  return (
    <div className='main'>
        <form onSubmit={handilSubmit}>
            <div className='form'>
                <input  name='input' onChange={()=>{
                    setNewTodo(props.target.value);
                }} value={newTodo}/>
            </div>
            <input type="submit" value='add' />
        </form>
            {todos.map((todo,i)=>{
                const todoClass =["bold","italic"];
                if (props.todo.coplet){
                    todoClass.push('line-though')
                }
            }
                return
                     <div >
                        <input onChange={()=>{
                         props.handlecoplet(props.i);
                        }}  checked={props.todo.coplet} type="checkbox" />
                        <span className={todocclass.jion(' ')}>{props.todo.Text}</span>

                        <button onClick={(e)=>{
                            props.handleDelete(props.i);
                        }}>dele</button>
                    </div>
            })};
    </div>
  );
};

export default TodoList