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
          // src="images/logo.png"
          src='https://www.ulmaconstruction.com/en/formwork/wall-formwork-column-formwork/@@images/5300ec4a-5eb5-4485-a615-0b9b14a7e150.png'
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{' '}
     <label className=' text-dark mt-4' style={{fontSize:'40px'}}><b>Dec</b></label> 
      </Navbar.Brand>
    </Container>
  </Navbar>
    </div>
  )
}
