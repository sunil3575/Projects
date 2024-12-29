import React, { useState } from 'react'
import './Slider.css';
import { Button, Col, Container, Image, ProgressBar, Row } from 'react-bootstrap';
import my_pic from './myphoto/IMG_20201214_150020.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faBuildingShield, faCartShopping, faCediSign, faCode, faCodeBranch, faDiagramProject, faDisplay, faDonate, faEnvelope, faHouse, faImage, faImages, faLandmark, faPager, faParking, faPeopleLine, faPercentage, faWebAwesome } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import { faAngrycreative, faCreativeCommons, faFacebook, faInstagram, faLinkedin, faPage4, faPagelines, faReact, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons/faProjectDiagram';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import resume from './Resume/Sunil CV333.pdf';
import { faWebflow } from '@fortawesome/free-brands-svg-icons/faWebflow';
import applicator from 'ajv/dist/vocabularies/applicator';
import { faReacteurope } from '@fortawesome/free-brands-svg-icons/faReacteurope';
import project1 from './project_photos/nilganga_oringinal.png';
import project2 from './project_photos/distionary react app.png';
import project3 from './project_photos/movie tralor search react app.png';
import project4 from './project_photos/weather react app.png';
import project5 from './project_photos/india-toursium project.png';
import project6 from './project_photos/meme genrator react app.png';
import {motion} from 'framer-motion';
import Footer from './FooterPage';





const Slider = () => {
  
  return (
    <>
   <Container fluid>
    <Row>
        <Col className='column_slider'>
              <Container className='col_container'>
                <Row>
                    <Col className='col-6' style={{padding:"20px"}}>
                   <Image className='slider_img' src={my_pic}></Image>
                    </Col>
                    <Col className='second_col'>
                 <span className='span_silder'><h6>HELLO EVERYBODY,I AM</h6>
                    <h3 style={{fontWeight:"bold"}}>SUNIL PANGENI</h3><h5 style={{}}>FRONTEND DEVELOPER</h5></span>
                    <motion.p  initial={{ x: "-5vw" }}
    animate={{ x:0}}
    exit={{ x: "100vw" }}
    transition={{ type: "tween" }} style={{lineHeight:"2",textAlign:"justify",marginTop:"30px",fontFamily:"sans-serif"}}>
                    Thank you for visiting my page.I enjoy solving problems writing code. 
                    I completed a <b>Master of Computer Application (MCA)</b>.Nowadays, I continue to challenge myself by 
                    learning and applying it to solve complex problems.It inspires me how coding can reach
                     so many people, the possibilities feel endless!</motion.p>
                     <p><FontAwesomeIcon className='react_icon' icon={faCalendar} />12th July,1991</p>
                <p><FontAwesomeIcon className='react_icon' icon={faPhone}/>+977 9865451246</p>
                <p><FontAwesomeIcon className='react_icon' icon={faEnvelope} />sunilpangeni3570@gmail.com</p>
                <p><FontAwesomeIcon className='react_icon' icon={faHouse} />Sudhodan Gaupalika word-2,charpata,rupendehi</p>
                <Row  className='row_social'>
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
        </Col>
    </Row>
    </Container>
    <motion.span  initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration:5 }}><Container  className='second_container'>
<Row>
    <Col className='col-6'>
<h3 style={{fontWeight:"bold",marginTop:"300px",marginBottom:"20px",fontFamily:"sans-serif"}}>ABOUT MYSELF</h3>
<p style={{textAlign:"justify",lineHeight:"2",fontFamily:"sans-serif"}}>To get hold of a challenging career with a reputed 
    company utilizing the chance to offer proven and developing skills inside the organization.I am a passionate and 
    detail-oriented Frontend Developer with a strong foundation in 
    building responsive and user-friendly web applications. With expertise in HTML, CSS, and JavaScript, 
    I create visually appealing and functional interfaces that enhance user experiences.
    I specialize in modern libraries and frameworks such as React.js and Bootstrap.</p>
    <Row>
    <Col className='inner_aboutself'><FontAwesomeIcon className='social_icon' icon={faProjectDiagram} /><br/>Projects<br/><b>10</b></Col>
    <Col className='inner_aboutself'><FontAwesomeIcon className='social_icon' icon={faDonate}/><br/>Donation<br/><b>$0</b></Col>
    <Col className='inner_aboutself'><FontAwesomeIcon className='social_icon' icon={faPeopleLine}/><br/>Volunteers<br/><b>0</b></Col>   
</Row>
    </Col>
    <Col className='second_colbars'>
      <p className='bars_paragraph'>Web Design Like React,Bootstrap & Java script.</p>
    <ProgressBar  className='progressbar' now={80}/>
    <p  className='bars_paragraph'>Big Database and Oracle Database</p>
    <ProgressBar className='progressbar' now={60}/>
    <p className='bars_paragraph'>Advanced Java Like Spring and Hibernate framework</p>
    <ProgressBar className='progressbar' now={50}/>
    <Row>
        <Col>
        <a className='resume_class' href={resume} download="Sunil_Resume"><FontAwesomeIcon className='social_icon1' icon={faDownload}/> Download Resume</a>
        </Col>
    </Row>
    </Col> 
</Row>
    </Container>
    <Container fluid className='third_container'>
     <Row className='third_row'>
        <Col className='third_col'>
             <Button className='btn' as='input' type='button' value="My Experiences"  ></Button>
        </Col>
        <Col className='third_col1'>
        <Button  className='btn' as="input"  type='button' value="My Designation"></Button>
        </Col>
     </Row>
     <Row className='third_rowtow'>
<Col  className='thirdsecond_col'><ul className='unordered'><li className='list'>2015 to 2017 Noida,India</li><li className='list1'>2017 to 2018 Delhi,India</li><li className='list2'>2018 to 2023 Nepalgunj,Nepal</li></ul></Col>
<Col className='thirdsecond2_col'><ul className='unordered1'><li className='list_'>FrontEnd Developer</li><li className='list_1'>WEB EARN SOLUTION Company</li>
<li className='list_2'>FrontEnd Developer</li><li className='list_3'>NEAR GROUP (CHATBOT) Company</li><li className='list_4'>Insurance Claim Administrator</li><li className='list_5'>BHERI HOSPITAL</li></ul></Col>
     </Row>
    </Container>
    <Container className='fourth_container'>
     <Row>
      <Col className='col-2'></Col>
      <Col>
      <h2 style={{fontWeight:"bold"}}>OFFERINGS TO MY CLIENTS</h2>
      <p className='offer_paragraph'>When offering my services as a frontend developer to clients, it's essential to highlight my skills and tailor my services
         to their needs. Below are some topics and offerings can present to my clients:</p>
      </Col>
      <Col className='col-2'></Col>
     </Row>
     <Row className='service_row'>
      <Col className='react_icon1'>
      <FontAwesomeIcon icon={faBuilding}/>
      <p className='reacticon_paragraph'>Custom Website Design</p>
      <p className='defination_icon'>Custom website design involves creating unique and tailored solutions for a client’s specific needs. This process includes crafting
         a distinctive look, feel, and functionality that aligns with the client’s brand and goals.</p>
      </Col>
      <Col className='react_icon2'>
      <FontAwesomeIcon className='images_icon' icon={faImages}/>
      <p className='reacticon_paragraph'>Landing Page</p>
      <p className='defination_icon'>A landing page is a standalone web page designed to achieve a specific goal, 
        typically marketing related, such as generating leads, showcasing
         a product, or promoting an event. It is often tailored for a single campaign or purpose.</p>
      </Col>
      <Col className='react_icon3'>
      <FontAwesomeIcon icon={faCartShopping}/>
      <p className='reacticon_paragraph'>E-commerce Solutions</p>
      <p className='defination_icon'>E-commerce solutions encompass needed to set up, operate, and optimize an online store. This guide provides
         an in-depth understanding of services and features you can offer as a frontend developer.</p>
      </Col>
      <Col className='react_icon4'>
      <FontAwesomeIcon icon={faPager}/>
      <p className='reacticon_paragraph'>Single Page Applications</p>
      <p className='defination_icon'>A single page application is a website or web application that dynamically rewrites a 
        current web page with new data from the web server, 
        instead of the default method of a web browser loading entire new pages.</p>
      </Col>
     </Row>
    </Container>
    <Container fluid className='fifth_container'>
      <Row>
        <Col>
        <h2 style={{marginTop:"80px",fontWeight:"bold"}}>OUR LATEST FEATURED PROJECTS</h2>
        </Col>
      </Row>
      <Row className='fifth_row'>
        <Col className='fifth_col'><Image src={project1} height={300} width={450}/>
        <p style={{marginTop:"10px",fontSize:"larger",fontWeight:"normal"}}>Hydropower project</p></Col>
        <Col className='fifth_col'><Image src={project2} height={300} width={450}/>
        <p style={{marginTop:"10px",fontSize:"larger",fontWeight:"normal"}}>Dictionary App</p></Col>
        <Col className='fifth_col'><Image src={project3} height={300} width={450}/>
        <p style={{marginTop:"10px",fontSize:"larger",fontWeight:"normal"}}>Movie Trailer App</p></Col>
      </Row>
      <Row className='fifth_row'>
        <Col className='fifth_col'><Image src={project4} height={300} width={450}/>
        <p style={{marginTop:"10px",fontSize:"larger",fontWeight:"normal"}}>Weather Forecasting App</p></Col>
        <Col className='fifth_col'><Image src={project5} height={300} width={450}/>
        <p style={{marginTop:"10px",fontSize:"larger",fontWeight:"normal"}}>India Tourism Project</p></Col>
        <Col className='fifth_col'><Image src={project6} height={300} width={450}/>
        <p style={{marginTop:"10px",fontSize:"larger",fontWeight:"normal"}}>Meme-Genrator-App</p></Col>
      </Row>
    </Container></motion.span>
   
    </>
   
  )
}

export default Slider;
