import React from 'react'
import './Projects.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import project1 from '../Components/project_photos/nilganga_oringinal.png';
import project2 from '../Components/project_photos/distionary react app.png';
import project3 from '../Components/project_photos/movie tralor search react app.png';
import project4 from '../Components/project_photos/weather react app.png';
import project5 from '../Components/project_photos/india-toursium project.png';
import project6 from '../Components/project_photos/meme genrator react app.png';


const Projects = () => {
  return (
    <Container fluid className='fifth_container1'>
    <Row>
      <Col>
      <h2 style={{marginTop:"80px",fontWeight:"bold"}}>OUR LATEST FEATURED PROJECTS</h2>
      </Col>
    </Row>
    <Row className='fifth_row'>
      <Col className='fifth_col1'><Image src={project1} height={300} width={450}/>
      <p style={{marginTop:"10px",fontSize:"larger",fontWeight:"normal"}}>Hydropower project</p></Col>
      <Col className='fifth_col1'><Image src={project2} height={300} width={450}/>
      <p style={{marginTop:"10px",fontSize:"larger",fontWeight:"normal"}}>Dictionary App</p></Col>
      <Col className='fifth_col1'><Image src={project3} height={300} width={450}/>
      <p style={{marginTop:"10px",fontSize:"larger",fontWeight:"normal"}}>Movie Trailer App</p></Col>
    </Row>
    <Row className='fifth_row'>
      <Col className='fifth_col1'><Image src={project4} height={300} width={450}/>
      <p style={{marginTop:"10px",fontSize:"larger",fontWeight:"normal"}}>Weather Forecasting App</p></Col>
      <Col className='fifth_col1'><Image src={project5} height={300} width={450}/>
      <p style={{marginTop:"10px",fontSize:"larger",fontWeight:"normal"}}>India Tourism Project</p></Col>
      <Col className='fifth_col1'><Image src={project6} height={300} width={450}/>
      <p style={{marginTop:"10px",fontSize:"larger",fontWeight:"normal"}}>Meme-Genrator-App</p></Col>
    </Row>
  </Container>
  )
}

export default Projects;
