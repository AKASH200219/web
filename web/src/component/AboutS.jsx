import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import img from '../assets/images/img.jpg';






function AboutS() {
  return (
    <Container className="my-5">
      
      <Row className="align-items-center">

        <Col md={6}>
          <h1 className="fw-bold">Empowering learners worldwide</h1>
          <p className="text-muted">
         At Learnify, we're on a mission to transform lives through learning. We believe that everyone deserves access to high-quality education, regardless of their background or location.
          </p>
          <p className="text-muted">
        Our platform connects passionate instructors with eager learners, creating a global community of knowledge sharing. From coding to design, business to photography, we offer courses that help people build real skills for the modern world.
          </p>
          

          <Row className="mt-4 g-3">

            <Col md={6}>
              <div className="skill-box">
               
                <div>
                  <h6 className='fw-bold'>Global Reach</h6>
                  <p>Students from 150+ countries</p>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="skill-box">
                
                <div>
                  <h6 className='fw-bold'>Quality Content</h6>
                  <p>Vetted by industry experts</p>
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

export default AboutS