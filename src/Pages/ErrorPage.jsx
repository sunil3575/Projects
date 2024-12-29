import React from 'react'
import './ErrorPage.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
 <Container fluid className='error_container'>
  <Row>
    <Col>
      <h1 className='heading90'> So Sorry! <i class="fa-sharp fa-regular fa-face-frown icon45"></i></h1>
      <p className='error_paragraph'>The page you are looking for cannot  be found</p>
      <ul>possible reasons:
        <li>The address may have been typed incorrectly.</li>
        <li>it may be a broken or outdated link.</li>
      </ul>
      <Link to='/'>
      <button  type='button' >Go to Home Page</button>
      </Link>
    </Col>
  </Row>
 </Container>
  )
}

export default ErrorPage;
