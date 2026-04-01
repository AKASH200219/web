import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CodeXml,SwatchBook,Briefcase ,Megaphone,Smartphone,Cloud,Camera} from 'lucide-react';
import { HiOutlineChartBar } from "react-icons/hi";
import './Third.css'


function Third() {
  return (
    <>
    <div className="text-center my-5 px-3 ">
  <h5>Browse Categories</h5>
  <h2>Explore Our Top Categories</h2>
  <h6>Find the perfect course from our wide selection of categories taught by industry experts.</h6>

    <Row className="mt-4 g-3">

        <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="p-3 h-100">
     
              <Card.Body> <CodeXml className='CdTag' />
                <Card.Title>Web Development</Card.Title>
                  <Card.Text>Build modern websites and web applications</Card.Text>
                    <Card.Link href="#">156 courses</Card.Link>
              </Card.Body>
            </Card>
        </Col>
    

        <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="p-3 h-100">
              <Card.Body><HiOutlineChartBar className='Chart' />
                <Card.Title>Data Science</Card.Title>
                  <Card.Text>Analyze data and build ML models</Card.Text>
                    <Card.Link href="#">98 courses</Card.Link>
             </Card.Body>
           </Card>
        </Col>

        <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="p-3 h-100">
              <Card.Body><SwatchBook className='Swatch' />
                <Card.Title>UI/UX Design</Card.Title>
                  <Card.Text>Create beautiful user experiences</Card.Text>
                    <Card.Link href="#">124 courses</Card.Link>
              </Card.Body>
           </Card>
        </Col>

        <Col xs={12} sm={6} md={6} lg={3}>
           <Card className="p-3 h-100">
              <Card.Body><Briefcase className='Briefcase'/>
                <Card.Title>Business</Card.Title>
                  <Card.Text>Grow your career and business</Card.Text>
                    <Card.Link href="#">87 courses</Card.Link>
              </Card.Body>
          </Card>
        </Col>


        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="p-3 h-100">
            <Card.Body><Megaphone className='Mega'/>

               <Card.Title>Digital Marketing</Card.Title>
               <Card.Text>Master SEO, Social Media, and ads</Card.Text>
              <Card.Link href="#">156 courses</Card.Link>
           </Card.Body>
         </Card>
       </Col>

       <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="p-3 h-100">
             <Card.Body><Smartphone className='Phone' />
               <Card.Title>Mobile Development</Card.Title>
               <Card.Text>Build iOS and Android apps</Card.Text>
               <Card.Link href="#">64 courses</Card.Link>
           </Card.Body>
          </Card>
        </Col>


        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="p-3 h-100">
            <Card.Body> <Cloud className='Cloud' />
               <Card.Title>Cloud & DevOps</Card.Title>
               <Card.Text>AWS, Azure, Docker, Kubernetes</Card.Text>
               <Card.Link href="#">58 courses</Card.Link>
          </Card.Body>
         </Card>
       </Col>

       <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="p-3 h-100">
             <Card.Body><Camera className='Camera' />
               <Card.Title>Photography</Card.Title>
               <Card.Text>Capture stunning images</Card.Text>
               <Card.Link href="#">45 courses</Card.Link>
           </Card.Body>
         </Card>
        </Col>
      </Row>
</div>

    </>

  )
}

export default Third