import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import {Todo} from './Todo'
export const TodoList = () => {

  const {todos} = useContext(GlobalContext)

  function completeTodo(id){
    
    for(let i=0;i<todos.length;i++){
      if(todos[i].id=== id){
        if(todos[i].isCompleted===false){
          console.log(todos[i])
          todos[i].isCompleted = true;
          
        }
        else{
          console.log(todos[i])
          todos[i].isCompleted = false;   
        }
    }
  }
}
  return (
    <div>
        <h3>Your List</h3>
        <ul className = "list">
          {todos.map(todo => (
            
            <Todo
            
            key = {todo.id} 
            todo = {todo}
            completeTodo = {completeTodo}
            />
            ))}
            


        </ul>
        
        
    </div>
  )
}
