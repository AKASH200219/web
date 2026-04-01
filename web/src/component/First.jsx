import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import Button from 'react-bootstrap/Button';
import './First.css'
// import { Link } from 'react-router-dom';

// import bg from './assets/images/bg.png';
// import bg from '../assets/images/bg.png';


function First() {
  return (
    <>
    <Navbar bg="" expand="lg">
      <Container>

        
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faBookOpen} className="me-2 icon" />
          Learnify
        </Navbar.Brand>

       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mx-auto text-center">
            <Nav.Link href="/course">Courses</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/instructors">Instructors</Nav.Link>
            <Nav.Link href="/price">Pricing</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>

          <Nav className="align-items-center text-center">
            <Nav.Link>
              <FontAwesomeIcon icon={faSearch} className="fs-5 me-3" />
            </Nav.Link>

            <Nav.Link>
              <FontAwesomeIcon icon={faMoon} className="fs-5 me-3" />
            </Nav.Link>

            <Nav.Link href="#Signin">Sign in</Nav.Link>
{/* <Link to={'/ad'}></Link> */}
            <Button className="rounded-pill px-4 ms-2">
              Get Started
            </Button>
          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
    
    </>
  
  )
}

export default First;