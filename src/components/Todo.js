import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';
export const Todo = ({todo}) => {

    const {deleteTodo} = useContext(GlobalContext)
    const [checked, setChecked] = useState(false)
    

const completeTodo = () => {
  setChecked(current => !current)
  todo.isCompleted = !todo.isCompleted
}

function createDate(deadline){
  return new Date(deadline +' PST').toLocaleDateString("en-US", {timeZone: "PST"})
}
  return (
    <li className = {todo.isCompleted ? 'todo-complete' : 'todo'}>
      
        {todo.text} <span>{(createDate(todo.deadline))}</span> 
        <button onClick = {() => deleteTodo(todo.id)} 
        className = "delete-btn">x</button>
        <button onClick={completeTodo}
        >Complete</button>
        
    </li>
  )
}
