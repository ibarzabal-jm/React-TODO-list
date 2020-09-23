import React from 'react'
import { TodoCard } from './TodoCard'

export const TodoList = ({ todos, handleDelete, handleArchive}) => {
    return (
        <div>
            <ul className="list-group list-group-flush">
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
            </ul>
            
        </div>
    )
}
