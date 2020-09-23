import React, { useState } from 'react'

import { useForm } from '../../hooks/useForm';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const TodoAddModal = ({ handleAddTodo }) => {


    const [showModal, setShowModal] = useState(false);

    const handleHide = () =>{
        setShowModal(false);
    }

    const handleShow = () =>{
        setShowModal(true);
    }
    
    const [{category, description}, handleInputChange, reset ] = useForm({
        category:'',
        description:'',
    })

    


    const handleSubmit = ( e ) => {

        const newTodo = {
            id: new Date().getTime(),
            category: category,
            desc:     description,
            done: false
        }

        


        handleAddTodo( newTodo );
        reset();

        handleHide();

    }

    return (
        <Modal show={showModal} onHide={handleHide} >
            <Modal.Header closeButton>
                <Modal.Title>Agregar tarea</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Form.Group>
                    <Form.Label>Categoria</Form.Label>

                    <Form.Control   type="text"
                                    name="category"
                                    autoComplete="off"
                                    value={category}
                                    onChange={handleInputChange}
                    />

                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control   type="text"
                                    name="description"
                                    autoComplete="off"
                                    value={description}
                                    onChange={handleInputChange}
                    />
                </Form.Group>
            </Modal.Body>
            
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={handleHide}
                >
                    Cancelar
                </Button>
                <Button
                    variant="primary"
                    onClick={handleSubmit}
                >
                    Agregar
                </Button>
               
            </Modal.Footer>
            
        </Modal>
    )
}
