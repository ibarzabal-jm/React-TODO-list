import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';


export const TodoCard = ({ todo, index, handleDelete, handleArchive}) => {


    const{ id, desc, category, done } = todo;
    
 
    return (
        <Col className="mb-4 text-center d-flex align-items-stretch justify-content-center">
            <Card >

                <Card.Body>
                    <Card.Title>
                        {category}
                        <hr/>
                    </Card.Title>

                    <Card.Text>

                        {/* <img src={url} alt={title} /> */}



                        {desc}
                    </Card.Text>

                </Card.Body>


                <Card.Footer>

                    {
                        done ?
                                <>
                                    <Button variant="warning" onClick={ () => handleArchive( id ) }> Desarchivar </Button>
                                    <Button variant="danger"  onClick={ () => handleDelete( id ) }> Borrar  </Button>
                                </>
                            :
                                <>
                                    <Button size="md" block onClick={ () => handleArchive( id ) }> Completar </Button>
                                </>

                    }

                </Card.Footer>
            </Card>
        </Col>
    )
}
