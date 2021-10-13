import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Container} from 'react-bootstrap'
import StyledNavbar from "../components/Navbar/StyledNavbar";
import Categoria from '../components/Categoria/Categoria';


const Categorias = () =>{
    return(
        <div>
        <StyledNavbar />    
        <div className='container d-flex justify-content center'>
            <div className='row'>
                <div className='col-md-4'>
                    <Categoria 
                    imagen="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg"
                    titulo="Programación"
                    texto="En esta categoria podras encontrar retos relacionados al mundo de la programación , desde la logica basica , hasta los algoritmos mas complicados!"
                    /> 
                </div>

                <Col md={4}>
                    <Categoria 
                    imagen="https://image.freepik.com/free-photo/high-school-students-working-international-flags-board_53876-78434.jpg"
                    titulo="Idiomas"
                    texto="En esta categoria podras encontrar retos relacionados al aprendizaje de los distintos idiomas del mundo , desde completar oraciones , hasta cuestionarios de comprension de lectura."
                    /> 
                </Col> 
                
                <Col md={4}>
                    <Categoria 
                    imagen="https://image.freepik.com/free-photo/sports-tools_53876-138077.jpg"
                    titulo="Actividad Fisica"
                    texto="En esta categoria podras encontrar retos relacionados al mundo de los deportes , desde ejercicios basicos hasta los mas extenuantes!"
                    /> 
                </Col> 
            </div>
        </div>
        <div class="d-flex justify-content-center mb-3 mt-5">
            
            <button class="btn btn-primary">Crear usuario</button>
        </div>
        
        
        </div>
    )
}

export default Categorias;