import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AboutF.css";

function AboutF() {
  return (
    <>
    <div className="container-fluid bg px-3 pt-4 pb-5 ">

    <div className=' mt-5 pt-5'>
      <Card className="px-5 py-2 rounded-pill mb-4 bd mt-4 d-flex  gap-2">
  <div className="d-flex align-items-center gap-2 ">
    
    <span>Our Story</span>
  </div>
</Card> 
     <h1 className="fw-bold display-2 txt">
  Democratizing education <br />
  for everyone
</h1>


  
      <p className=" col-12 col-md-8 col-lg-6">
       We believe that education should be accessible to everyone, everywhere. That's why we've built a platform that connects learners with world-class instructors.
      </p>

     
      </div>
    </div>
    </>
  )
}

export default AboutF