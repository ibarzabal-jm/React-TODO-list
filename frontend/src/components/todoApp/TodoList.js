import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { TodoCard } from './TodoCard'
import { TodoContext } from './TodoContext'

export const TodoList = ( { todos } ) => {


    const { dispatch } = useContext(TodoContext);

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

    return (
        <Row className="m-4">
                {
                    todos.map( (todo, i) =>(

                        <TodoCard
                            key={ todo.id } 
                            todo={todo}
                            index={ i }
                            handleDelete={handleDelete}
                            handleArchive={handleArchive}
                        />
                    ))
                }

            
        </Row>
    )
}
