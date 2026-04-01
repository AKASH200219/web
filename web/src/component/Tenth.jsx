import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './foot.css'

function Tenth() {
  return (
    <footer className="bg-light text-dark pt-5 pb-3">
      <div className="container">
        
        <div className="row text-start">

          
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">
              <FontAwesomeIcon icon={faBookOpen} className=" icon me-2" />
              Learnify
            </h5>

            <p style={{ fontSize: "14px" }}>
              Master new skills with world-class instructors. Access thousands
              of courses in technology, business, design, and more.
            </p>
            
             <div className='flex items-center gap-3 text-2xl cursor-pointer fl'>
                <FaXTwitter className=' Twi ' />
                <FaLinkedin className='lin' />
                <FaYoutube className='yt' />
                <FaInstagram className='inst' />
                 
            </div>  
           

            
          </div>

          
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Categories</h6>
            <ul className="list-unstyled">
              <li>Web Development</li>
              <li>Data Science</li>
              <li>UI/UX Design</li>
              <li>Business</li>
              <li>Digital Marketing</li>
              <li>Mobile Development</li>
            </ul>
          </div>

         
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Become an Instructor</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>

          
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>FAQ</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Accessibility</li>
            </ul>
          </div>

        </div>

        <hr />

        
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <p className="mb-2">2026 Learnify. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Tenth;