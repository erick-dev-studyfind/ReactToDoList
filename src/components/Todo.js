import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
export const Todo = ({todo}) => {

    const {deleteTodo} = useContext(GlobalContext)

function completeTodo(id){
  if(todo.isCompleted===false){
    console.log(todo)
    todo.isCompleted = true;
  }
  else{
    console.log(todo)
    todo.isCompleted = false;
  }
}

function createDate(deadline){
  return new Date(deadline +' PST').toLocaleDateString("en-US", {timeZone: "PST"})
}
  return (
    <li className = {todo.isCompleted ? 'todo-complete' : 'todo'}>
      
        {todo.text} <span>{(createDate(todo.deadline))}</span> 
        <button onClick = {() => deleteTodo(todo.id)} 
        className = "delete-btn">x</button>
        <button onClick={() => completeTodo(todo)}
        >Complete</button>
        
    </li>
  )
}
