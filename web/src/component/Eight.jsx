import React from 'react'
import './Eight.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Eight() {
  return (
    <>
    <div className="container pricing">
         <div className='text-center'>
         <h5>PRICING PLANS</h5>
          <h2>Choose Your Learning Path</h2>
         <h6>Start free and upgrade when you're ready. All plans include a 30-day money-back guarantee.</h6>

      </div>
      <Row className='mt-4 g-3 justify-content-center'>
        <Col xs={12} sm={6} md={4}>
            <Card className='crd h-100 w-100  p-4'>
                <Card.Body className="d-flex flex-column">
                    <h4 className='text-center'>Free</h4>
                    <p className='text-center'>Get started with free courses</p>
                    <h1 className='text-center'>Free</h1>
                    <p>Access to 50+ free courses</p>
                    <p>Basic course completion certificates</p>
                    <p>Community forum access</p>
                    <p>Mobile app access</p>

                    <Button className="btn btn-outline-dark w-100 mt-auto rounded-pill">
                    Start Free
                    </Button>
                    



                </Card.Body>
            </Card>
        
        </Col>

         <Col xs={12} sm={6} md={4}>
            <Card className='crd h-100 w-100  p-4'>
                <Card.Body className="d-flex flex-column">
                    <h4 className='text-center'>Pro</h4>
                    <p className='text-center'>Perfect for serious learners</p>
                    <h1 className='text-center'>$29 /month</h1>
                    <p>Unlimited access to all courses</p>
                    <p>Verified certificates</p>
                    <p>Offline viewing</p>
                    <p>Offline viewing</p>
                    <p>Course downloads</p>
                    <p>Ad-free experience</p>
                   <Button className="btn btn-outline-dark w-100 mt-auto rounded-pill">
                    Start pro Trail
                    </Button>
                    



                </Card.Body>
            </Card>
        
        </Col>


        <Col xs={12} sm={6} md={4}>
            <Card className='crd h-100 w-100 p-4'>
                <Card.Body className="d-flex flex-column">
                    <h4 className='text-center'>Team</h4>
                    <p className='text-center'>For teams and organizations</p>
                    <h1 className='text-center'>$49 /month</h1>
                    <p>Everything in Pro</p>
                    <p>Team management dashboard</p>
                    <p>Progress tracking & analytics</p>
                    <p>Custom learning paths</p>
                    <p>SSO integration</p>
                    <p>SSO integration</p>
                    <Button className="btn btn-outline-dark w-100 mt-auto rounded-pill">
                    Contact Sales
                    </Button>
                    



                </Card.Body>
            </Card>
        
        </Col>


      </Row>
      <p className='text-center'>All plans include a 30-day money-back guarantee. No questions asked.</p>
    </div>
    
    </>
  )
}

export default Eight