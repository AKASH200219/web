import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Sixth.css';
import { FaStar } from "react-icons/fa";

function Sixth() {
  return (
    <>
     <div className="container mb-4">
     <div className="text-center my-5 px-3 ">
  <h5>Expert Instructors</h5>
  <h2>Learn From the Best</h2>
  <h6>Our instructors are industry professionals from top companies, passionate about sharing their knowledge.</h6>
    </div>
    <Row className="mt-4 g-3 justify-content-center">

  <Col xs={12} sm={6} md={6} lg={3}>
    <Card className="h-100 text-center p-3">

      <Card.Img
        variant="top"
        className="rounded-circle mx-auto mt-3"
        style={{ width: "120px", height: "120px", objectFit: "cover" }}
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
      />

      <Card.Body className="text-center">
  <Card.Title>Sarah Johnson</Card.Title>

  <p className="c">Senior Software Engineer at Google</p>

  <div className="d-flex justify-content-center align-items-center">
    <FaStar color="gold" size={14} style={{ marginRight: "4px" }} />
    <span>4.9</span>
  </div>
</Card.Body>

    </Card>
  </Col>
   <Col xs={12} sm={6} md={6} lg={3}>
    <Card className="h-100 text-center p-3">

      <Card.Img
        variant="top"
        className="rounded-circle mx-auto mt-3"
        style={{ width: "120px", height: "120px", objectFit: "cover" }}
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
      />

      <Card.Body className="text-center">
        <Card.Title>Michael Chen</Card.Title>
        <p className="c">Data Science Lead at Netflix</p>
       <div className="d-flex justify-content-center align-items-center">
    <FaStar color="gold" size={14} style={{ marginRight: "4px" }} />
    <span>4.9</span>
  </div>
      </Card.Body>

    </Card>
  </Col>
   <Col xs={12} sm={6} md={6} lg={3}>
    <Card className="h-100 text-center p-3">

      <Card.Img
        variant="top"
        className="rounded-circle mx-auto mt-3"
        style={{ width: "120px", height: "120px", objectFit: "cover" }}
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
      />

      <Card.Body>
        <Card.Title>Emily Rodriguez</Card.Title>
        <p className="c">Principal Designer at Airbnb</p>
        <div className="d-flex justify-content-center align-items-center">
    <FaStar color="gold" size={14} style={{ marginRight: "4px" }} />
    <span>4.9</span>
  </div>
      </Card.Body>

    </Card>
  </Col>
   <Col xs={12} sm={6} md={6} lg={3}>
    <Card className="h-100 text-center p-3">

      <Card.Img
        variant="top"
        className="rounded-circle mx-auto mt-3"
        style={{ width: "100px", height: "120px", objectFit: "cover" }}
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
      />

      <Card.Body>
        <Card.Title>David Kim</Card.Title>
        <p className="c">AWS Solution Architect</p>
        <div className="d-flex justify-content-center align-items-center">
    <FaStar color="gold" size={14} style={{ marginRight: "4px" }} />
    <span>4.9</span>
  </div>
      </Card.Body>

    </Card>
  </Col>

</Row>
</div>
    </>
  )
}

export default Sixth