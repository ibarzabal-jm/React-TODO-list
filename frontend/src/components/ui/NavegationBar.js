import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';


import { AddTodoModal }  from '../modal/AddTodoModal'

export const NavegationBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                
                <Link to="/"><Navbar.Brand >TODO LIST</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">SeparatedLink</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/archived"
                        >
                            Archivos
                    </NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Button>Boton</Button>
            </Navbar>
            <AddTodoModal />
        </>
    )
}
