import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar from '../../Assets/avatar.svg'

export const Home2 = () =>{
return (
    <div>
        <section className = 'home'>
            <Container fluid>
                <Container className='home-content'>
                <Row>
                        <Col md='9' classNmae = 'home-content--header'>
                            <h1 className = 'home-content--header__head'>
                               LET ME <strong className = 'strong-text'>INTRODUCE MYSELF</strong>
                            </h1>
                            <p>
                                I fell in love with programming and I have at least learnt something, I think..
                           </p>
                            <p>I am fluent in classics like <strong className = 'strong-text'>Javascript HTMl CSS </strong>.</p>
                            <p>My current focus is on <strong className ='strong-text'> React NODE AWS and Azure Services </strong></p>
                            <p>Whenever possible, I also apply my passion for developing products with Modern Javascript Frameworks  like Node.js and React.js</p>
                        </Col>
                        <Col md='3'>
                        <img src={avatar} alt="home pic" className="img-fluid" />
                        </Col>
                    </Row>
                    <Row>
                        <div className="home-content-about col-md-12">
                            <h1 className = 'home-content--header__head'> 
                                FIND ME ON
                            </h1>
                            <p>Feel free to <strong className='strong-text'>connect</strong> with me</p>
                            <ul>
                                <a className = 'home-content-about__icon'><li><i className="fa fa-github" aria-hidden="true"></i></li></a>
                                <a className = 'home-content-about__icon'><li><i className="fa fa-twitter" aria-hidden="true"></i></li></a>
                               <a className = 'home-content-about__icon' > <li><i className="fa fa-linkedin" aria-hidden="true"></i></li></a>
                            </ul>
                        </div>
                    </Row>
                </Container>

        </Container>
        </section>
        </div>
)
}