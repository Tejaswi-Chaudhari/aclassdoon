import React from 'react'
import {Form, Button } from 'react-bootstrap';
import "./contact.css"

const Contact = () => {
    return (
        <div className="form">
            <Form>
                <div className="title">Contact Form</div>
                <div className="fields">
                <Form.Group className="mb-3" controlId="formBasicEmail"> 
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPhoneno">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control type="phoneno" placeholder="Phone No." />
                </Form.Group>
               </div>
                <center><Button type="submit" className="btn" type="submit" size="lg" block>
                        Submit
                    </Button>
                </center>
                </Form>
        </div>
    )
}

export default Contact
