import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';
import { useScroll, motion, useTransform } from "framer-motion";


const NavigationBar = () => {
// Capture the scroll position
const { scrollY } = useScroll();

// Change navbar background color based on scroll position
const background = useTransform(scrollY, [0, 300], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]);

// Change navbar height based on scroll position
const height = useTransform(scrollY, [0, 300], ["80px", "60px"]);
  return (
    <>
    <motion.span initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:5}}><Navbar style={{boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"}} className='p-4' sticky='top'>
      <Container>
        <Navbar.Brand style={{color:"white",fontWeight:"500"}} href="/">MEETME</Navbar.Brand>
       
        <Nav className="ml-auto">
          <Nav.Link className='NAV-ITEMS' href="/home">Home</Nav.Link>
          <Nav.Link className='NAV-ITEMS' href="/about">About</Nav.Link>
          <Nav.Link className='NAV-ITEMS' href="/experience">Experience</Nav.Link>
          <Nav.Link className='NAV-ITEMS' href="/projects">Projects</Nav.Link>          
          <Nav.Link className='NAV-ITEMS' href="/contact">Contact</Nav.Link>          

        </Nav>
      </Container>
    </Navbar></motion.span>
  </>
);
}
  
export default NavigationBar;
