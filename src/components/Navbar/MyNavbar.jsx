import React from 'react'
import{Navbar, Container, Nav} from 'react-bootstrap'
import './MyNavbar.css'

const MyNavbar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home" className='nav'>Home</Nav.Link>
      <Nav.Link href="#features" className='nav1'>reservation</Nav.Link>
      <Nav.Link href="#pricing" className='nav2'>centre</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default MyNavbar
