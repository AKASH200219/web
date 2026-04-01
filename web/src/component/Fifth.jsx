import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import img from '../assets/images/img.jpg';
import './Fifth.css';
import { FaClock } from "react-icons/fa";
import { CodeXml, Users, BadgeCheck} from 'lucide-react';



function Fifth() {
  return (
    <Container className="my-5">
      
      <Row className="align-items-center">

        <Col md={6}>
          <h1 className="fw-bold">Skills</h1>
          <p className="text-muted">
           We provide everything you need to succeed in your learning journey. Our platform is designed to make learning effective and enjoyable.
          </p>

          <Row className="mt-4 g-3">

            <Col md={6}>
  <div className="skill-box d-flex align-items-start gap-3">
    
    
    <div className="icons">
      <FaClock />
    </div>

    
    <div>
      <h6>Learn at Your Pace</h6>
      <p>
        Access courses anytime, anywhere. Learn on your schedule with lifetime access to all purchased courses.
      </p>
    </div>

  </div>
</Col>

            <Col md={6}>
              <div className="skill-box d-flex align-items-start gap-3">
                <div className="icons">< Users/></div>
                <div>
                  <h6>Expert Instructors</h6>
                  <p>Learn from industry professionals working at top companies like Google, Meta, and Amazon.</p>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="skill-box d-flex align-items-start gap-3">
                <div className="icons"><CodeXml/></div>
                <div>
                  <h6>Hands-on Projects</h6>
                  <p>Build real-world projects and add them to your portfolio. Practice what you learn with coding exercises.</p>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="skill-box d-flex align-items-start gap-3">
                <div className="icons">< BadgeCheck/></div>
                <div>
                  <h6>Certificates</h6>
                  <p>Earn verified certificates upon completion. Share your achievements on LinkedIn and your resume.</p>
                </div>
              </div>
            </Col>

          </Row>
        </Col>

        
        <Col md={6} className="position-relative mt-4 mt-md-0 ">

          <img 
             src={img}
             alt=""
            className="main-img lf"
          />


          
     
        </Col>

      </Row>
    </Container>
  )
}

export default Fifth