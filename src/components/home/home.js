import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

export const Home = () =>{
return (
    <div>
        <section className = 'home'>
            <Container>
                <Container className='home-content'>
                <Row>
                        <Col md='7' classNmae = 'home-content--header'>
                            <h1 className = 'home-content--header__head'>
                                Hi There!
                            </h1>
                            <h1 classNme = 'home-content--header__name'>
                                I Am
                                 <strong>Yasmin Agwan</strong>
                            </h1>
                            <div></div>
                        </Col>
                        <Col md= '5'></Col>
                </Row>
                </Container>
       
        </Container>
        </section>
        </div>
)
}