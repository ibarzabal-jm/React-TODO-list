import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';

export const TodoCard = ({ todo, index, handleDelete, handleArchive}) => {


    const{ id, desc, category, done } = todo;


    return (
        <Col md={4} lg={3} xl={2} className="mb-4 text-center d-flex align-items-stretch justify-content-center">
            <Card >

                <Card.Body>
                    <Card.Title>
                        {category}
                    </Card.Title>

                    <Card.Text>
                        {desc}
                    </Card.Text>

                </Card.Body>


                <Card.Footer>

                    {
                        done?
                            <Button onClick={ () => handleDelete( id ) }> Borrar Definitivamente </Button>
                            :<Button onClick={ () => handleArchive( id ) }> Completar </Button>                            

                    }

                </Card.Footer>
            </Card>
        </Col>
    )
}
