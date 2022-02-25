import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
export default function LoginNav() {
  return (
    <div>    
  <Navbar bg="transprent" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="images/logo.png"
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{' '}
     <label className='text-dark mt-4' style={{fontSize:'30px'}}><b>Dec</b></label> 
      </Navbar.Brand>
    </Container>
  </Navbar>
    </div>
  )
}
