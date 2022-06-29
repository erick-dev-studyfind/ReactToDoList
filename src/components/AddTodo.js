import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTodo = () => {
    const [text, setText] = useState('')
    const [deadline, setDeadline] = useState('')

    const {addTodo} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTodo = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            deadline: deadline,
            isCompleted: false
        }

        addTodo(newTodo)
    }
    
  return (
    <div>
        <h3>Add new Todo</h3>
        <form onSubmit = {onSubmit}>
            <div className = "form-control">
                <label htmlFor = "text">Text</label>
                <input 
                type = "text" 
                value = {text}
                onChange={(e) => setText(e.target.value)} 
                placeholder = "Enter text..." />
            </div>
            <div className = "form-control">
                <label htmlFor = "deadline">
                    Deadline
                </label>
                <input 
                type = "text"
                value = {deadline}
                onChange = {(e) => setDeadline(e.target.value)}
                placeholder = "Enter deadline..."
                />
                <button 
                className = "btn">Add Todo</button>
            </div>
        </form>
    </div>
  )
}
