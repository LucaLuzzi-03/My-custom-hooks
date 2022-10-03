import { useReducer, useEffect } from "react";
import { todoReducer } from './todoReducer'

const initialState = []

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
}


export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter( todo => todo.done !== true ).length;

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
      }, [ todos ])
  

    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'Add todo',
            payload: todo,
        }

        dispatch( action )
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: 'Delete todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: 'Toggle todo',
            payload: id
        });
    }

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}