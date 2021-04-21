import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import about from '../../Assets/about.png'
import { skillSet } from './skill-set'
import { tools } from './tools';
export const About = () => {
    const techStack = () => {
        for(let property in skillSet) {
            return  <Col><i className={`${skillSet[property]} tech-icon-images`}></i> </Col>
            }
    }
       
    
return (
   
            <Container fluid className = 'about'> 
                <Container className='about-content'>
                    <Row>
                        <Col md='7'>
                            <h1> Know Who I'M</h1>
                                <p>
                                    Hi Everyone, I am Yasmin Agwan from Delhi India, I am a <strong className = 'strong-text'>Senior Software developer </strong>In CBRE India
                                     
                            </p>
                                <p>Apart from the coding,some other activities that i love to do!</p>
                                    <ul>
                                    <li>Playing Games</li>
                                    <li>Traveling</li>
                                    <li>Read Books</li>
                                    </ul>
                        </Col>
                        <Col md='5'>
                        <img src={about} alt="home pic" className="img-fluid" />
                        </Col>
            </Row>
            <h2 className='about-content-header-skill'> 
                        Professional <strong className = 'strong-text'>SkillSet</strong>
                    </h2>
            <Row className = 'about-content__skillset'>
                {
                    Object.keys(skillSet).map((skills) => {
                        return (
                            <Col className='tech-icons' md={2}><i className={`${skillSet[skills]} tech-icon-images`}></i> </Col>
                        )
                    })
                    
              }
                
               
            </Row>
            <h2 className='about-content-header-skill'> 
                        Tools <strong className = 'strong-text'>I Use</strong>
                    </h2>
            <Row className = 'about-content__skillset'>
                {
                    Object.keys(tools).map((tool) => {
                        return (
                            <Col className='tech-icons' md={2}><i className={`${tools[tool]} tech-icon-images`}></i> </Col>
                        )
                    })
                    
              }
                
               
            </Row>
                    </Container>
            </Container>
)
}