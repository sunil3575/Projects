import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faDonate, faDownload, faEnvelope, faHouse, faPeopleLine, faPhone, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container, Image, ProgressBar, Row } from 'react-bootstrap';
import my_pic from '../Components/myphoto/IMG_20201214_150020.jpg'
import resume from '../Components/Resume/Sunil CV333.pdf';
import './About.css';
import { motion } from "framer-motion";
import { delay } from 'motion';


const About = () => {

  return (
    <>
    <Container className='col_container1'>
    
    <Row>
        <Col className='col-6' style={{padding:"20px"}}>
        <Image className='slider_img' src={my_pic}></Image>
        </Col>
        <Col className='second_col'>
        <span className='span_silder'><h6>HELLO EVERYBODY,I AM</h6>
        <h3 style={{fontWeight:"bold"}}>SUNIL PANGENI</h3><h5 style={{}}>FRONTEND DEVELOPER</h5></span>
        <p style={{lineHeight:"2",textAlign:"justify",marginTop:"30px",fontFamily:"sans-serif"}}>
        Thank you for visiting my page.I enjoy solving problems writing code. 
        I completed a <b>Master of Computer Application (MCA)</b>.Nowadays, I continue to challenge myself by 
        learning and applying it to solve complex problems.It inspires me how coding can reach
         so many people, the possibilities feel endless!</p>
         <p><FontAwesomeIcon className='react_icon' icon={faCalendar} />12th July,1991</p>
    <p><FontAwesomeIcon className='react_icon' icon={faPhone}/>+977 9865451246</p>
    <p><FontAwesomeIcon className='react_icon' icon={faEnvelope} />sunilpangeni3570@gmail.com</p>
    <p><FontAwesomeIcon className='react_icon' icon={faHouse} />Suddhodhan Gaupalika ward-2,charpata,rupendehi</p>
    <Row className='row_social'>
        <Col className='social_column'>
        <a href='https://www.facebook.com' target='_blank'><FontAwesomeIcon className='react_socialicon1' icon={faFacebook} /></a>
        </Col>
        <Col>
        <a href='https://www.twitter.com' target='_blank'><FontAwesomeIcon className='react_socialicon2' icon={faTwitter}/></a>

        </Col>
        <Col>
        <a href='https://www.linkedin.com' target='_blank'><FontAwesomeIcon className='react_socialicon3' icon={faLinkedin} /></a>

        </Col>
        <Col>
        <a href='https://www.instagram.com' target='_blank'><FontAwesomeIcon className='react_socialicon4' icon={faInstagram}/></a>

        </Col>
      
    </Row>
            </Col>  
            
           
    </Row>
   
   
   </Container>
  <Container className='second_container1'>
<Row>
    <Col className='col-6'>
<h3 className='heading_about'>ABOUT MYSELF</h3>
<p style={{textAlign:"justify",lineHeight:"2",fontFamily:"sans-serif"}}>To get hold of a challenging career with a reputed 
    company utilizing the chance to offer proven and developing skills inside the organization.I am a passionate and 
    detail-oriented Frontend Developer with a strong foundation in 
    building responsive and user-friendly web applications. With expertise in HTML, CSS, and JavaScript, 
    I create visually appealing and functional interfaces that enhance user experiences.
    I specialize in modern libraries and frameworks such as React.js and Bootstrap.</p>
    <Row>
    <Col className='inner_aboutself1'><FontAwesomeIcon className='social_icon1' icon={faProjectDiagram} /><br/>Projects<br/><b>10</b></Col>
    <Col className='inner_aboutself1'><FontAwesomeIcon className='social_icon1' icon={faDonate}/><br/>Donation<br/><b>$0</b></Col>
    <Col className='inner_aboutself1'><FontAwesomeIcon className='social_icon1' icon={faPeopleLine}/><br/>Volunteers<br/><b>0</b></Col>   
</Row>
    </Col>
    <Col className='second_colbars1'>
      <p className='bars_paragraph1'>Web Design Like React,Bootstrap & Java script.</p>
    <ProgressBar  className='progressbar1' now={80}/>
    <p  className='bars_paragraph1'>Big Database and Oracle Database</p>
    <ProgressBar className='progressbar1' now={60}/>
    <p className='bars_paragraph1'>Advanced Java Like Spring and Hibernate framework</p>
    <ProgressBar className='progressbar1' now={50}/>
    <Row>
        <Col>
        <a className='resume_class1' href={resume} download="Sunil_Resume"><FontAwesomeIcon className='social_icon11' icon={faDownload}/> Download Resume</a>
        </Col>
    </Row>
    </Col> 
</Row>

    </Container>
  </>
  )
}

export default About;
