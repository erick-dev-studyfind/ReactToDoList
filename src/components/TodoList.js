import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import {Todo} from './Todo'
export const TodoList = () => {

  const {todos, sortOption} = useContext(GlobalContext)

  

  let bool = false;
  // const {toggleCompleted} = useContext(GlobalContext)
//   function completeTodo(id){
    
//     for(let i=0;i<todos.length;i++){
//       if(todos[i].id=== id){
//         if(todos[i].isCompleted===false){
//           console.log(todos[i])
//           todos[i].isCompleted = true;
          
//         }
//         else{
//           console.log(todos[i])
//           todos[i].isCompleted = false;   
//         }
//     }
//   }
// }


function toggleCompleted(){
  let newTodos = [];

  for(let i=0;i<todos.length;i++){
    if(todos[i].isCompleted ===bool){
      newTodos.push(todos[i])
    }
    console.log(newTodos)
    bool = !bool
    return newTodos
  }

  //tried it using map and filter but nothing would happen 
  // todos.map(todo => todo.isCompleted ===!bool)
  // console.log(todos)
  // bool = !bool;
  
}
  return (
    <div>
        <h3>Your List</h3>
        <button onClick = {() =>toggleCompleted()}>Toggle Completed Tasks</button>
        <ul className = "list">
          {todos.map(todo => (
            
            <Todo
            
            key = {todo.id} 
            todo = {todo}
            //completeTodo = {completeTodo}
            />
            ))}
            


        </ul>
        
        
    </div>
  )
}
