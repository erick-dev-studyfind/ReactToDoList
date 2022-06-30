import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
//Initial State

const initialState = {
    todos:[],
    hideOn: false,
    sortOption: ''
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
    function toggleView(view){
        dispatch({
            type:'TOGGLE_VIEW',
            payload:view
        })
    }
    function sortView(option){
        dispatch({
            type: 'SORT_VIEW',
            payload:option
        })
    }

    return(<GlobalContext.Provider value = {{
        todos: state.todos,
        hideOn: state.hideOn,
        sortOption: state.sortOption,
        deleteTodo,
        addTodo,
        toggleView,
        sortView
    }}>
        {children}
    </GlobalContext.Provider>)
}