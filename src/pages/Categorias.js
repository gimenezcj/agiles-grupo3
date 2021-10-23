import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap'
import StyledNavbar from "../components/Navbar/StyledNavbar";
import Categoria from '../components/Categoria/Categoria';


const Categorias = () =>{
    return(
        <div>
        <StyledNavbar />    
        
        <h1 className="display-4" style={{textAlign:'center' , marginTop:'50px' , marginBottom:'50px'}}>Categorias</h1>
        <div className='container'>
            <Row>
                <Col md={3}>
                    <Categoria 
                    imagen="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg"
                    titulo="Programación"
                    texto="En esta categoria podras encontrar retos relacionados al mundo de la programación , desde la logica basica, hasta los algoritmos más complejos."
                    /> 
                </Col>

                <Col md={3}>
                    <Categoria 
                    imagen="https://image.freepik.com/free-photo/high-school-students-working-international-flags-board_53876-78434.jpg"
                    titulo="Idiomas"
                    texto="En esta categoria podras encontrar retos relacionados al aprendizaje de los distintos idiomas del mundo, desde completar oraciones, hasta cuestionarios de comprensión de lectura."
                    /> 
                </Col> 
                
                <Col md={3}>
                    <Categoria 
                    imagen="https://image.freepik.com/free-photo/sports-tools_53876-138077.jpg"
                    titulo="Actividad Física"
                    texto="En esta categoria podras encontrar retos relacionados al mundo de los deportes, desde ejercicios básicos hasta los mas extenuantes."
                    /> 
                </Col>
                <Col md={3}>
                    <Categoria 
                    imagen="https://image.freepik.com/free-photo/lovely-asian-young-lady-portriat-happy-woman-lifestyle-concept_1150-9025.jpg"
                    titulo="Lectura"
                    texto="En esta categoria podras encontrar retos relacionados al mundo de la literatura.Desde encontrar esa motivación para descubrir libros nuevos hasta retos para mejorar tus tiempos de lectura."
                    /> 
                </Col> 
                
        
            </Row>
        </div>
     
        
        
        </div>
    )
}

export default Categorias;