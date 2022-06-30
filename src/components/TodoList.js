import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import {Todo} from './Todo'

export const TodoList = () => {

  const {todos, hideOn, toggleView, sortOption, sortView} = useContext(GlobalContext)
  const todoToggle = hideOn ? todos.filter(todo => !todo.isCompleted) : todos
  const todoSort = 
  sortOption === 'name' ? todos.sort((a,b) => a.text.localeCompare(b.text))
  : 
  (sortOption ==='deadline') ? todos.sort((a,b) => new Date(a.deadline + 'PST') - new Date(b.deadline +'PST')) 
  : todoToggle;
  return (
    <div>
        <h3>Your List</h3>
        <button className = "button-online" onClick = {() => sortView('name')}>Sort By Name</button>
        <button className = "button-online" onClick = {() => sortView('deadline')}>Sort by Deadline</button>
        <button className = "button-online" onClick = {() =>toggleView(!hideOn)}>Toggle Completed Tasks</button>
        <ul className = "list">
          {todoSort.map(todo => (<Todo key = {todo.id} todo = {todo}/>))}
        </ul>
    </div>
  )
}
