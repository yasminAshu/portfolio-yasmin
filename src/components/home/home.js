import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ReactTypingEffect from 'react-typing-effect';
import homeLogo from '../../Assets/home-main.svg'
import { Home2 } from './home2';

export const Home = () =>{
return (
    <div>
        <section className = 'home'>
            <Container fluid>
                <Container className='home-content'>
                <Row>
                        <Col md='7' classNmae = 'home-content--header'>
                            <h1 className = 'home-content--header__head'>
                                Hi There!
                            </h1>
                            <h1 className = 'home-content--header__name'>
                                I Am
                                 <strong>Yasmin Agwan</strong>
                            </h1>
                            <div className = 'custom-typewriter'> 
                            <ReactTypingEffect text={["MERN Stack Developer", "Developer", "Open Source Contributer"]} /> 
                            </div>
                        </Col>
                        <Col md='5'>
                        <img src={homeLogo} alt="home pic" className="img-fluid" />
                        </Col>
                </Row>
                </Container>
            </Container>
            <Home2 />
        </section>
        </div>
)
}