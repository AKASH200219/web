import React from 'react'
import './Seventh.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaStar } from "react-icons/fa";

function Seventh() {
  return (
    <>
    <div className='bgg1 '>
            <div className="container">
     <div className="my-5 px-3 ">
      <div className='text-center'>
         <h5>Success Stories</h5>
          <h2>What Our Students Say</h2>
         <h6>Join thousands of students who have transformed their careers with our courses.</h6>

      </div>
 
   <Row className="mt-4 g-3 justify-content-center">

        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="h-100">
            
            <Card.Body>
              <FaStar color='gold'/> <FaStar color='gold' /> <FaStar color='gold' /> <FaStar color='gold' /> <FaStar color='gold' />
        <p>"The machine learning courses are top-notch. I went from knowing basic Python to building production ML models. Now I work as a data scientist at a top tech company."  </p>
        <p className='pp'>Course: Web Development Bootcamp</p>
       

        <div className="author">
          <img className='rounded-circle'
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
            
          />
          <span>Maria Garcia</span>
        </div>

      </Card.Body>
          </Card>
        </Col>
         <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="h-100">
            
            <Card.Body><FaStar color='gold'/> <FaStar color='gold' /> <FaStar color='gold' /> <FaStar color='gold' /> <FaStar color='gold' />
        <p >"Learnify helped me transition from marketing to software engineering in just 6 months. The web development bootcamp was incredibly comprehensive and practical."  </p>
         <p className='pp'>Course: Web Development Bootcamp</p>
        <div className="author">
          <img className='rounded-circle bb'
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
            
          />
          <span>Alex Thompson</span>
        </div>

      </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="h-100">
            
            <Card.Body><FaStar color='gold'/> <FaStar color='gold' /> <FaStar color='gold' /> <FaStar color='gold' /> <FaStar color='gold' />
        <p >"Learnify helped me transition from marketing to software engineering in just 6 months. The web development bootcamp was incredibly comprehensive and practical."  </p>
         <p className='pp'>Course: UI/UX Design Complete Guide</p>
        <div className="author">
          <img className='rounded-circle  bb'
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"/>
          <span>James Wilson</span>
        </div>

      </Card.Body>
          </Card>
        </Col>


        
        </Row>
    </div>
    </div>
    </div>

    
    
    </>
  )
}

export default Seventh