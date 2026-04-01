import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiCircleCheck } from "react-icons/ci";
import { Star } from 'react-bootstrap-icons';
import { FaClock } from "react-icons/fa6";
import { RiShieldCheckLine } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import './Second.css';

function Second() {
  return (
    <div className="container-fluid bg text-center px-3 py-5">


      <Card className="px-5 py-2 rounded-pill mb-4 bd mx-auto mt-4 d-flex justify-content-center gap-2">
  <div className="d-flex align-items-center gap-2">
    <CiCircleCheck />
    <span>Trusted by 50,000+ learners worldwide</span>
  </div>
</Card> 
      <h1 className="fw-bold display-6 display-md-4 display-lg-3">
        Learn Without Limits
      </h1>

      <h2 className="fw-bold text-info mt-4">
        Learnify
      </h2>

  
      <p className="mx-auto col-12 col-md-8 col-lg-6">
        Master new skills with world-class instructors. Access thousands of
        courses in technology, business, design, and more.
      </p>

     
      <div className="mt-4 d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2">
  
  <Button 
    size="sm"
    className="rounded-pill px-3 hero-btn-primary w-auto" href='/course'
  >
    Explore Courses <FaLongArrowAltRight/>
  </Button>

  <Button 
    size="sm"
    className="rounded-pill px-3 hero-btn-secondary w-auto" href='/price'
  >
    View Pricing  <FaLongArrowAltRight/>
  </Button>

</div>
   <div className="mt-4 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
  <Star color="gold" size={20} /><span>4.8 average rating</span>
  <RiShieldCheckLine color='green' size={20}/><span>30-day money-back guarantee</span>
  <FaClock color='green'/><span>Lifetime access</span>
</div>
    </div>
  )
}

export default Second;