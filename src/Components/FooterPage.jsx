import React from 'react'
import './FooterPage.css';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from 'flowbite-react';

const Footer = () => {
  return (
  //  <Container fluid className='sixth_container'>
  //   <Row>
  //       <Col>
  //       <h1>black footer</h1>
  //       </Col>
  //   </Row>
  //  </Container>
  <Footer Container>
      <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default Footer;
