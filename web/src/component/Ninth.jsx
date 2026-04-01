import React from 'react'
import Button from 'react-bootstrap/Button';
import './Ninth.css'

function Ninth() {
  return (
    <div className="text-center bgg">
      <div className="container">

        <h1 className="fw-bold">Ready to Start Learning?</h1>

        <p className="mt-3">
          Join over 50,000 students already learning on Learnify. 
          Get unlimited access to all courses with our Pro plan.
        </p>

      
        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">

          <Button className="btn-dark rounded-pill px-4 py-2">
            Start Learning Free
          </Button>

          <Button className="btn-outline-light rounded-pill px-4 py-2">
            Browse Courses
          </Button>

        </div>

      </div>
    </div>
  )
}

export default Ninth