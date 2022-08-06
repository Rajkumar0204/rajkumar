import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function app() {
    return (
      <Container>
      <Navbar bg='success' expand="lg">
      
        <Navbar.Brand href="#home" text-align="center">AUTO NEXT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              About
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
    </Navbar>
    
     
         <Row>
        <Col >
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.wallpapersafari.com/84/34/4tCWSQ.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://storage.googleapis.com/wp-classified/sites/14/2020/01/red-car-new.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cms.groupeditors.com/img/autodealer/upload/New_Golf_GTI_Static_002.jpg?with=750"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>   
    </Col>
           <Col> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>INTRODUCTION</Card.Title>
        <Card.Text>
        Auto Next is an Indian multinational automotive manufacturing corporation headquartered in Mumbai. It was established in 1945 as Auto Next.
        </Card.Text>
        <Button variant="success">More Details</Button>
      </Card.Body>
    </Card>
    </Col>
      </Row>
      <Row> 
      <div class="text-bg-success p-3"> Some of the services which are considered in Auto Next are given below </div> 
    </Row>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
        <Card.Title>Testing</Card.Title>
        <Card.Text>
        Automotive testing puts full vehicles, components and systems through a series of laboratory, virtual and 'real world' assessments to ensure it is safe, reliable and compliant with safety regulations.
        </Card.Text>
        <Button variant="success">More Details</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Design</Card.Title>
        <Card.Text>
        The designers collaborate closely with research, development and production areas, coordinating and fine-tuning vehicle dimensions, material concepts and production processes, also ensuring producibility in the process.
   
        </Card.Text>
        <Button variant="success">More Details</Button>
      </Card.Body>
      </Card>
        </Col>
     
      <Col>
        <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Manufacturing services</Card.Title>
        <Card.Text>
        A shift from only manufacturing to now include service. The automobile industry has been a product-out type industry, mainly concentrating on manufacturing
        </Card.Text>
        <Button variant="success">More Details</Button>
      </Card.Body>
      </Card>
        </Col>
        </Row>
        <Row> 
        <div class="text-bg-success p-3"> Email-autonext@gmail.com </div> 
    </Row>
      </Container> 
          
     
  );
}  
   
export default app;