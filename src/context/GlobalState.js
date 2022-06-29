import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
//Initial State

const initialState = {
    todos:[
    ]
}

//Create context

export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions
    function deleteTodo(id){
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        })
    }

    function addTodo(todo){
        dispatch({
            type: 'ADD_TODO',
            payload: todo
        })
    }
    function completeTodo(id){
        dispatch({
            type: 'COMPLETE_TODO',
            payload:id
        })
    }

    return(<GlobalContext.Provider value = {{
        todos: state.todos,
        deleteTodo,
        addTodo
    }}>
        {children}
    </GlobalContext.Provider>)
}