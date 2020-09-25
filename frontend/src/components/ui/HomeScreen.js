import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';


import { TodoList } from '../todoApp/TodoList'
import { TodoContext } from '../todoApp/TodoContext';
import { getTodoByComplete } from '../../selectors/getTodoByComplete';

export const HomeScreen = ( ) => {

    const {todos} = useContext(TodoContext);

    const todoslist = getTodoByComplete(todos, false);


    return (
        <>
            <Container>
                <h1>Tareas por hacer : { todoslist.length }</h1>
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
