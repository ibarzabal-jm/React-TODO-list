import React, { useEffect, useReducer } from 'react'
import { AppRouter } from './routers/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';


import { TodoContext } from './components/todoApp/TodoContext';
import { todoReducer } from './components/todoApp/todoReducer';

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    

    const [todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) )
    }, [todos])
    
    return (
        <div>
            <TodoContext.Provider value={{ todos, dispatch }}>
                <AppRouter />
            </TodoContext.Provider>
        </div>
    )
}
