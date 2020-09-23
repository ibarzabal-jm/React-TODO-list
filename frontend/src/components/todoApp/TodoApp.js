import React, { useEffect, useReducer } from 'react'

import { TodoAddModal } from './TodoAddModal';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer'


const init = () =>{
    
    return JSON.parse(localStorage.getItem('todos')) || [];

}




export const TodoApp = () => {


    const [todos, dispatch ] = useReducer(todoReducer, [], init);

    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) )
    }, [todos])
 

    const handleDelete = ( todoId ) => {

        dispatch( {
            type:'delete',
            payload: todoId
        } );

    }

    const handleArchive = (todoId) =>{
        dispatch( {
            type:'archive',
            payload: todoId
        } );
    }

    const handleAddTodo = ( newTodo ) =>{
        dispatch({
                type: 'add',
                payload: newTodo
        });

    }



    

    return (
        <>
            <div className="container">
                <h1>TodoApp ({ todos.length })</h1>
                
                
                <hr></hr>
    
               <div className="row">
    
                       <TodoList
                            todos={ todos }
                            handleDelete={handleDelete}
                            handleArchive={handleArchive}
                       />
    
               </div>
               
            </div>

            <TodoAddModal handleAddTodo={handleAddTodo}/>
        </>        
    )
}
