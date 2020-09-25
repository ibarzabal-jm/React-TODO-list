import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';


import { TodoList } from '../todoApp/TodoList'
import { TodoContext } from '../todoApp/TodoContext';
import { getTodoByComplete } from '../../selectors/getTodoByComplete';

export const ArchivedScreen = () => {

    const {todos} = useContext(TodoContext);

    const archived = true;

    const todoslist = getTodoByComplete(todos, archived);


    return (
        <>
            <Container>
                <h1>Tareas completadas : { todoslist.length }</h1>
                <hr></hr>

                <div className="row">
    
                    <TodoList
                        todos={ todoslist }
                    />
                </div>
            </Container>
        </>
    )
}


