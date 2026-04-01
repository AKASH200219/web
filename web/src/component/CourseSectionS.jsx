import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './CourseSectionS.css'
import Button from 'react-bootstrap/Button';

function CourseSectionS() {
  return (
    <>
    
      <div className='p-3  mt-4'>

        <Row>

         <Col md={3}>
  <div className="sidebar">

    <h6 className="mb-3 fw-bold">Categories</h6>

    <ul className="list-unstyled m-0">

      <li className="item active">
        <span>All Categories</span>
      </li>

      <li className="item">
        <span>Web Development</span>
        <span className="count">(156)</span>
      </li>

      <li className="item">
        <span>Data Science</span>
        <span className="count">(98)</span>
      </li>

      <li className="item">
        <span>UI/UX Design</span>
        <span className="count">(124)</span>
      </li>

      <li className="item">
        <span>Business</span>
        <span className="count">(87)</span>
      </li>

      <li className="item">
        <span>Digital Marketing</span>
        <span className="count">(72)</span>
      </li>
      <li className="item">
        <span>Mobile Development</span>
        <span className="count">(64)</span>
      </li>
      <li className="item">
        <span>Cloud & DevOps</span>
        <span className="count">(58)</span>
      </li>
      <li className="item">
        <span>Photography</span>
        <span className="count">(45)</span>
      </li>
 <h6 className="mb-3 fw-bold">Level</h6>
  <div className="d-flex flex-wrap gap-2 mt-2">
      <Button className='rounded-pill'>All Levels</Button>
      <Button className="rounded-pill">Beginner</Button>
      <Button className="rounded-pill">Intermediate</Button>
      <Button className="rounded-pill">Advanced</Button>
  </div>
   <div className="mt-4">
      <Form.Check label="Free" />
      <Form.Check label="Under $50" />
      <Form.Check label="$50 - $100" />
      <Form.Check label="$100+" />
    </div>
 
    </ul>


  </div>
</Col>
          {/* RIGHT SIDE - YOUR CARDS */}
          <Col md={9}>
             <div className="course-scroll">
            {/* <h3>All Courses</h3> */}
            <Row className="g-3 mt-">

              {/* CARD 1 */}
              <Col md={4}>
                <Card className="h-100">
                  <Card.Img variant="top"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" />
                  <Card.Body>
                    <p className="category">WEB DEVELOPMENT</p>
                    <Card.Title>The Complete Web Development Bootcamp...</Card.Title>
                    <div className="price">
                      <span className="new">$89.99</span>{" "}
                      <span className="old">$199.99</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
               <Col md={4}>
                <Card className="h-100">
                  <Card.Img variant="top"
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop" />
                  <Card.Body>
                    <p className="category">DATA SCIENCE</p>
                    <Card.Title>Python Data Science...</Card.Title>
                    <div className="price">
                      <span className="new">$94.99</span>{" "}
                      <span className="old">$189.99</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* CARD 2 */}
              <Col md={4}>
                <Card className="h-100">
                  <Card.Img variant="top"
                    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c" />
                  <Card.Body>
                    <p className="category">UI/UX</p>
                    <Card.Title>UI/UX Design Course...</Card.Title>
                    <div className="price">
                      <span className="new">$79.99</span>{" "}
                      <span className="old">$149.99</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* CARD 3 */}
              <Col md={4}>
                <Card className="h-100">
                  <Card.Img variant="top"
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop" />
                  <Card.Body>
                    <p className="category">DATA SCIENCE</p>
                    <Card.Title>Python Data Science...</Card.Title>
                    <div className="price">
                      <span className="new">$94.99</span>{" "}
                      <span className="old">$189.99</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
             
              <Col md={4}>
                <Card className="h-100">
                  <Card.Img variant="top"
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop" />
                  <Card.Body>
                    <p className="category">DATA SCIENCE</p>
                    <Card.Title>Python Data Science...</Card.Title>
                    <div className="price">
                      <span className="new">$94.99</span>{" "}
                      <span className="old">$189.99</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col><Col md={4}>
                <Card className="h-100">
                  <Card.Img variant="top"
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" />
                  <Card.Body>
                    <p className="category">DATA SCIENCE</p>
                    <Card.Title>Python Data Science...</Card.Title>
                    <div className="price">
                      <span className="new">$94.99</span>{" "}
                      <span className="old">$189.99</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col><Col md={4}>
                <Card className="h-100">
                  <Card.Img variant="top"
                    src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=450&fit=crop" />
                  <Card.Body>
                    <p className="category">DATA SCIENCE</p>
                    <Card.Title>Python Data Science...</Card.Title>
                    <div className="price">
                      <span className="new">$94.99</span>{" "}
                      <span className="old">$189.99</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

            

            </Row>
            </div>
          </Col>

        </Row>

      </div>
    </>
  )
}

export default CourseSectionS