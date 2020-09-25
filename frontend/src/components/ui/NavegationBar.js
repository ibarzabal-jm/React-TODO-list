import React, { useState }  from 'react'
import { Link, NavLink } from 'react-router-dom'


import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Button } from 'react-bootstrap'
import { TodoAddModal } from '../todoApp/TodoAddModal'



export const NavegationBar = () => {


    const [showAddTodoModal, setShowAddTodoModal] = useState(false);

    const handleHideModal = () =>{
        setShowAddTodoModal(false);
    }

    const handleShowModal = () =>{
        setShowAddTodoModal(true);
    }

    
    

    return (
        <>
            <Navbar collapseOnSelect  bg="dark" variant="dark">
                
                <Link to="/"><Navbar.Brand >TODO LIST</Navbar.Brand></Link>
    
                <Nav className="mr-auto">
                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact   to="/archived"
                    >
                        Archivos
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact   to="/search"
                    >
                        Buscar
                    </NavLink>
                    
                </Nav>

                <Button 
                    variant="primary"
                    onClick={ handleShowModal }
                >
                    Agregar Tarea
                </Button>
                

            </Navbar>
            
            <TodoAddModal

                showModal={showAddTodoModal}
                handleHide={handleHideModal}

            />

        </>
    )
}
