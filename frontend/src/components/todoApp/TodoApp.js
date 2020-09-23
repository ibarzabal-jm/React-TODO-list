import React, { useState, useEffect, useReducer } from 'react'
import { Button, Container } from 'react-bootstrap';

import { TodoAddModal } from './TodoAddModal';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer'


const init = () =>{
    
    return JSON.parse(localStorage.getItem('todos')) || [];

}


export const TodoApp = () => {


    const [showAddTodoModal, setShowAddTodoModal] = useState(false);

    const handleHideModal = () =>{
        setShowAddTodoModal(false);
    }

    const handleShowModal = () =>{
        setShowAddTodoModal(true);
    }


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
            <Container >
                <h1>Tareas por hacer : { todos.length }</h1>
                <hr></hr>
                <Button onClick={handleShowModal} >Agregar tarea</Button>
    
               <div className="row">
    
                       <TodoList
                            todos={ todos }
                            handleDelete={handleDelete}
                            handleArchive={handleArchive}
                       />
    
               </div>
               
            </Container>

            <TodoAddModal

                showModal={showAddTodoModal}
                handleHide={handleHideModal}
                handleAddTodo={handleAddTodo}
            />
        </>        
    )
}
