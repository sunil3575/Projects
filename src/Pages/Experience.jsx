import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Experience.css';

const Experience = () => {
  return (
   <Container fluid className='third_container_1'>
        <Row className='third_row1'>
           <Col className='third_col'>
                <Button className='btn' as='input' type='button' value="My Experiences"  ></Button>
           </Col>
           <Col className='third_col1'>
           <Button  className='btn' as="input"  type='button' value="My Designation"></Button>
           </Col>
        </Row>
        <Row className='third_rowtow'>
   <Col  className='thirdsecond_col1'><ul className='unordered'><li className='list'>2015 to 2017 Noida,India</li><li className='list1'>2017 to 2018 Delhi,India</li><li className='list2'>2018 to 2023 Nepalgunj,Nepal</li></ul></Col>
   <Col className='thirdsecond2_col1'><ul className='unordered11'><li className='list_'>FrontEnd Developer</li><li className='list_1'>WEB EARN SOLUTION Company</li>
   <li className='list_2'>FrontEnd Developer</li><li className='list_3'>NEAR GROUP (CHATBOT) Company</li><li className='list_4'>Insurance Claim Administrator</li><li className='list_5'>BHERI HOSPITAL</li></ul></Col>
        </Row>
       </Container>
  )
}

export default Experience;
