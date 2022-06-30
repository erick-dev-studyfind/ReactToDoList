// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        }
      case 'ADD_TODO':
        return {
          ...state,
          todos: [action.payload,...state.todos]
        }  
      case 'TOGGLE_VIEW':
        return{
          ...state,
          hideOn: action.payload
        }
      case 'SORT_VIEW':
        return{
          ...state,
          sortOption: action.payload
        }
     
      default:
        return state;
    }
  }
