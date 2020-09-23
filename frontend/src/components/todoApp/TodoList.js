import React from 'react'
import { Row } from 'react-bootstrap'
import { TodoCard } from './TodoCard'

export const TodoList = ({ todos, handleDelete, handleArchive}) => {
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
