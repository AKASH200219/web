import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { CodeXml,SwatchBook, ChartNoAxesColumnIncreasing,Briefcase ,Megaphone,Smartphone,Cloud,Camera} from 'lucide-react';



function AboutT() {
  return (
    <>
    <div className="text-center my-5 px-3 ">
  <h5>Browse Categories</h5>
  <h2>Explore Our Top Categories</h2>
  <h6>Find the perfect course from our wide selection of categories taught by industry experts.</h6>

    <Row className="mt-4 g-4 justify-content-center">

        <Col xs={12} sm={6} md={3}>
            <Card className="p-3 h-100">
     
              <Card.Body> 
                <Card.Title>Quality First</Card.Title>
                  <Card.Text>Every course goes through a rigorous review process to ensure the highest quality content for our learners.</Card.Text>
                   
              </Card.Body>
            </Card>
        </Col>
    

        <Col xs={12} sm={6} md={3}>
            <Card className="p-3 h-100">
              <Card.Body>
                <Card.Title>Community Driven</Card.Title>
                  <Card.Text>We foster a supportive learning community where students and instructors can connect and grow together.</Card.Text>
                    
             </Card.Body>
           </Card>
        </Col>

        <Col xs={12} sm={6} md={3}>
            <Card className="p-3 h-100">
              <Card.Body>
                <Card.Title>Innovation</Card.Title>
                  <Card.Text>We continuously improve our platform with the latest technology to provide the best learning experience.</Card.Text>
                    
              </Card.Body>
           </Card>
        </Col>

       
      </Row>
</div>

    </>

  )
}

export default AboutT