import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Container} from 'react-bootstrap'


const Categoria = () =>{
    return(
        <div>
            
        <Container fluid="md">
            <Row> 
            <Col md={4}>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg" height="250px" />
                    <Card.Body>
                        <Card.Title>Programación</Card.Title>
                        <Card.Text>
                        En esta categoria podras encontrar retos relacionados al mundo de la programación , desde la logica basica , hasta los algoritmos mas complicados!
                        </Card.Text>
                    <Button variant="primary">Ver Retos</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://image.freepik.com/free-photo/high-school-students-working-international-flags-board_53876-78434.jpg" height="250px" />
                    <Card.Body>
                        <Card.Title>Idiomas</Card.Title>
                        <Card.Text>
                        En esta categoria podras encontrar retos relacionados al mundo de la programación , desde la logica basica , hasta los algoritmos mas complicados!
                        </Card.Text>
                    <Button variant="primary">Ver Retos</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg" height="250px" />
                    <Card.Body>
                        <Card.Title>Programación</Card.Title>
                        <Card.Text>
                        En esta categoria podras encontrar retos relacionados al mundo de la programación , desde la logica basica , hasta los algoritmos mas complicados!
                        </Card.Text>
                    <Button variant="primary">Ver Retos</Button>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
            <Row>
            <Col md={4}>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg" height="250px"/>
                    <Card.Body>
                        <Card.Title>Programación</Card.Title>
                        <Card.Text>
                        En esta categoria podras encontrar retos relacionados al mundo de la programación , desde la logica basica , hasta los algoritmos mas complicados!
                        </Card.Text>
                    <Button variant="primary">Ver Retos</Button>
                    </Card.Body>
                </Card>
                
            </Col>
            <Col md={4}>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg" height="250px" />
                    <Card.Body>
                        <Card.Title>Programación</Card.Title>
                        <Card.Text>
                        En esta categoria podras encontrar retos relacionados al mundo de la programación , desde la logica basica , hasta los algoritmos mas complicados!
                        </Card.Text>
                    <Button variant="primary">Ver Retos</Button>
                    </Card.Body>
                </Card>
                
            </Col>
            <Col md={4}>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg" height="250px"/>
                    <Card.Body>
                        <Card.Title>Programación</Card.Title>
                        <Card.Text>
                        En esta categoria podras encontrar retos relacionados al mundo de la programación , desde la logica basica , hasta los algoritmos mas complicados!
                        </Card.Text>
                    <Button variant="primary">Ver Retos</Button>
                    </Card.Body>
                </Card>
                
            </Col>    
            </Row>
        </Container>
        <div>
        <Button variant="primary" size="lg">
            Crea tu propia categoria 
        </Button>
        </div>
        
        
        </div>
    )
}

export default Categoria;