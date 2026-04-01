import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaStar } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";
import { FaRegPlayCircle } from "react-icons/fa";

import './Fourth.css';

function Fourth() {
  return (
    <div className="container"> 
      <h5>FEATURED COURSES</h5>
      <h2>MOST POPULAR COURSES</h2>
      <p>Start learning from the highest-rated courses chosen by thousands of students worldwide.</p>

      <Row className="mt-4 g-3">

       
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="h-100 cr">
            <div className="image-wrapper">
              <Card.Img variant="top"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop" />
              <span className="badge discount">50% OFF</span>
              <span className="badge bestseller">Bestseller</span>
              <span className="badge duration">65 hours</span>
            </div>

            <Card.Body className="d-flex flex-column">
              <p className="category">WEB DEVELOPMENT</p>

              <Card.Title>
                The Complete Web Development Bootcamp...
              </Card.Title>

              <div className="author d-flex align-items-center gap-2">
                <img className='rounded-circle'
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
                />
                <h5>Sarah Johnson</h5>
              </div>

              <div className="rating d-flex align-items-center">
                <FaStar color="gold" size={14} />
                <span className="ms-1">4.8</span>
                <span className="ms-2 me-5">(46K)</span>
                <span>235K students</span>
              </div>

              <div className="details d-flex align-items-center">
                <HiOutlineChartBar size={14} />
                <span className="ms-1 me-3">All Levels</span>
                <FaRegPlayCircle size={14} />
                <span className="ms-1">478 lessons</span>
              </div>

              <div className="price mt-auto d-flex align-items-center">
                <span className="new me-2">$89.99</span>
                <span className="old">$199.99</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="h-100 cr">
            <div className="image-wrapper">
              <Card.Img variant="top"
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop" />
              <span className="badge discount">50% OFF</span>
              <span className="badge bestseller">Bestseller</span>
              <span className="badge duration">45 hours</span>
            </div>

            <Card.Body className="d-flex flex-column">
              <p className="category">DATA SCIENCE</p>

              <Card.Title>
                Machine Learning A-Z: AI, Python & R
              </Card.Title>

              <div className="author d-flex align-items-center gap-2">
                <img className='rounded-circle'
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"
                />
                <h5>Michael Chen</h5>
              </div>

              <div className="rating d-flex align-items-center">
                <FaStar color="gold" size={14} />
                <span className="ms-1">4.7</span>
                <span className="ms-1 me-3">(32K)</span>
                <span>178K students</span>
              </div>

              <div className="details d-flex align-items-center">
                <HiOutlineChartBar size={14} />
                <span className="ms-1 me-3">All Levels</span>
                <FaRegPlayCircle size={14} />
                <span className="ms-1">312 lessons</span>
              </div>

              <div className="price mt-auto d-flex align-items-center">
                <span className="new me-2">$94.99</span>
                <span className="old">$189.99</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

    
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="h-100 cr">
            <div className="image-wrapper">
              <Card.Img variant="top"
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop" />
              <span className="badge discount">50% OFF</span>
              <span className="badge bestseller">Bestseller</span>
              <span className="badge duration">38 hours</span>
            </div>

            <Card.Body className="d-flex flex-column">
              <p className="category">UI/UX DESIGN</p>

              <Card.Title>
                UI/UX Design: The Complete Guide
              </Card.Title>

              <div className="author d-flex align-items-center gap-2">
                <img className='rounded-circle'
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop"
                />
                <h5>Emily Rodriguez</h5>
              </div>

              <div className="rating d-flex align-items-center">
                <FaStar color="gold" size={14} />
                <span className="ms-1">4.9</span>
                <span className="ms-1 me-3">(19K)</span>
                <span>178K students</span>
              </div>

              <div className="details d-flex align-items-center">
                <HiOutlineChartBar size={14} />
                <span className="ms-1 me-3">Beginner</span>
                <FaRegPlayCircle size={14} />
                <span className="ms-1">245 lessons</span>
              </div>

              <div className="price mt-auto d-flex align-items-center">
                <span className="new me-2">$79.99</span>
                <span className="old">$159.99</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        
        <Col xs={12} sm={6} md={6} lg={3} >
          <Card className="h-100 cr">
            <div className="image-wrapper">
              <Card.Img variant="top"
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop" />
              <span className="badge discount">50% OFF</span>
              <span className="badge bestseller">Bestseller</span>
              <span className="badge duration">52 hours</span>
            </div>

            <Card.Body className="d-flex flex-column">
              <p className="category">CLOUD & DEVOPS</p>

              <Card.Title>
                AWS Certified Solutions Architect 2023
              </Card.Title>

              <div className="author d-flex align-items-center gap-2">
                <img className='rounded-circle'
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop"
                />
                <h5>David Kim</h5>
              </div>

              <div className="rating d-flex align-items-center">
                <FaStar color="gold" size={14} />
                <span className="ms-1">4.8</span>
                <span className="ms-1 me-3">(25K)</span>
                <span>157K students</span>
              </div>

              <div className="details d-flex align-items-center">
                <HiOutlineChartBar size={14} />
                <span className="ms-1 me-3">Intermediate</span>
                <FaRegPlayCircle size={14} />
                <span className="ms-1">380 lessons</span>
              </div>

              <div className="price mt-auto d-flex align-items-center">
                <span className="new me-2">$84.99</span>
                <span className="old">$169.99</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </div>
  )
}

export default Fourth;