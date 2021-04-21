import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
return (
    <>
     
            <Container fluid className='footer'>
                
                <Row>
                        <Col md='4' className = 'footer-colyright'>
                        <h3>
                            Desined and Developed by Yasmin Agwan
                          </h3>
                        </Col>
                        <Col md='4' className = 'footer-colyright'>
                       <h3> Copyright © {year} YA </h3>
                    </Col>
                    <Col md='4' className = 'footer-body'>
                        <ul className = 'footer-body-icon'>
                            <li><a><i className="fa fa-github" aria-hidden="true"></i></a></li>
                            <li><a><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            </ul>
                        </Col>
                </Row>
            </Container>
        </>
)
}