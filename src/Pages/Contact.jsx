import React, { useState } from 'react'
import './Contact.css';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {motion} from 'framer-motion';


const getIconSize = () => {
    if (window.innerWidth > 320) {
      return [20,20]; // Small icon for mobile screens
    }
    return [50, 50]; // Default icon size for larger screens
    }
    
    // // Set your Mapbox access token
    // mapboxgl.accessToken = 'pk.eyJ1Ijoic3NqaGhzLTM1NzAiLCJhIjoiY20xYXprdG55MXN6eDJsc2pkZXBtamJwdSJ9.0oRffCQBEzmlFfz2v0uPHQ';
    //custom icon
    // const customicon=new L.icon({
    //   iconUrl:"https://www.google.com/maps/dir/Malika+Nursery,+Sauraha+Pharsatikar/27.6089404,83.417163/@27.6072007,83.4142086,167m/data=!3m1!1e3!4m8!4m7!1m5!1m1!1s0x39968fa3cbf632e3:0x3234d001318e769!2m2!1d83.4172083!2d27.6089289!1m0!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D",
    //   iconSize:getIconSize(),
    //   iconAnchor:[20,20],
    // });
const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
     
    });
  
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: '' }); // Clear error on change
    };
    
  
    const validate = () => {
      const errors = {};
  
      if (!formData.name.trim()) {
        errors.name = 'Name is required';
      }
      
       if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } 
       else if(!formData.email.includes("@")) {
        errors.email = '@ is required';
      } 
  
      //  if (!formData.email.includes(".com")) {
      //   errors.email = '.com is required';
      // } 
     
      // // Check if email contains "@"
      // if (!formData.email("@")) {
      //   errors.email="Email must contain '@'.";
      //   return false;
      // }
      // // Check if email contains ".com"
      // if (!formData.email(".com")) {
      //   errors.email("Email must contain '.com'.");
      //   return false;
      // }
      // else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      //   errors.email = 'Invalid email address';
      // }
  
      if (!formData.message.trim()) {
        errors.message = 'Message is required (min 50 character)';
      }
      
  
      return errors;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length === 0) {
        setIsSubmitted(true);
        setErrors({});
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrors(validationErrors);
      }
    };
    return (
      <>
      <Container className='form-container'>
          <h3 className='heading'><u>Message me</u></h3>
          <Row className='form_container'>
              <Col className='column10'> 
              {isSubmitted && <Alert variant="success">Form submitted successfully!</Alert>}  
              <Form onSubmit={handleSubmit} className='form'>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control className='name' type="text" 
          placeholder="Enter your name" name='name' value={formData.name}
           onChange={handleChange} 
           isInvalid={!!errors.name}
           isValid={formData.name.trim()!== "" && !errors.name}/> {/* for Green border  */} 
        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        <Form.Control.Feedback type="valid">Good!</Form.Control.Feedback>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control className='name'  type="email" name='email' placeholder="Enter your email"
        value={formData.email} onChange={handleChange} 
        isInvalid={!!errors.email}
        isValid={formData.email.trim()!== "" && !errors.email} /> 
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
          </Form.Group> 
        <Form.Group className="mb-3" controlId="messagebox">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea"rows={4} className="focus"   placeholder="Enter your message..." name='message'
        value={formData.message} onChange={handleChange} 
        isInvalid={!!errors.message} 
        isValid={formData.message.length ===50}/> 
        <Form.Text className="text-muted"> {formData.message.length} / 350 characters</Form.Text>
        <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">Eligible to send message</Form.Control.Feedback>
        </Form.Group>
        
       
        
          <Button className='btn1' type='Submit' id='submit'>Submit</Button>
      </Form>
      </Col>
      </Row>
      <Row>
      <Col className='map_location' style={{marginBottom:"50px"}}>
        <h1 className="Contact_heading" style={{textAlign:"center",marginTop:"30px"}}><u>Personal Information</u></h1>
        <MapContainer center={[27.607199, 83.414790]} zoom={17} style={{ height: "350px", width: "100%",border:"2px solid blue" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='<a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <Marker position={[27.607199, 83.414790]}>
            <Popup>
            <h6 style={{color:"green"}}>sudhodan gaupalika word-03,charpata.</h6>
            <h6 style={{color:"green",textAlign:"center"}}>This is my house Location.</h6>
            </Popup>
          </Marker>
        </MapContainer>
      </Col>
      </Row>
      </Container>
      </>
    )
}
export default Contact;
