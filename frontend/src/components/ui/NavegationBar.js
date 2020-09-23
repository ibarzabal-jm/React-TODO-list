import React  from 'react'
import { Link, NavLink } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



export const NavegationBar = () => {


    

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

    
            </Navbar>

        </>
    )
}
