import React from 'react'
import { FloatingLabel, Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function FormPart() {
  let navigate=useNavigate()
    const [Login, setLogin] = useState({
        username: "",
        password: ""
    });
    const Loginchange=(e)=>{
        const { name, value } = e.target
        setLogin({
            ...Login,
            [name]: value
        })

    }
    const LoginHandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/add',Login).then((response)=>{
            console.log(response.data.data)
            localStorage.setItem('userdetail',JSON.stringify(response.data.data.username))
            navigate('/home')
        })

        
    }
    
    return (
        <div className='pt-5' >
            <center>
                <div >
                    <div className='conatiner mt-5' style={{ width: '30%', height: '30%' ,background:'rgb(162, 164, 166,0.7)',borderRadius:'15px'}}>
                        <div className='ms-3 me-3'>
                        <h4 className='pt-1'>User Login</h4>
                        <label>Enter user name&password to Login</label>
                        <>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Username"
                                className="mb-3"
                               
                            >
                                <Form.Control type="text" placeholder="abc"   name='username' onChange={ Loginchange}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password"  placeholder="password"  name='password' onChange={ Loginchange}/>
                            </FloatingLabel>
                            <Button variant="warning" className='mt-2 mb-3 w-75' size="lg" type='submit'  onClick={LoginHandler}>Login</Button>{' '}
                        </>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}
