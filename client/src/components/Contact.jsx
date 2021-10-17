import React from 'react'
import {useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

import "./contact.css"

const Contact = () => {
    const [user, setUser] = useState({
        name: '',
        emailid:'',
        phone_no: '',
    })

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://127.0.0.1:8000/api/contact", user);
        setUser({
            name: '',
            emailid:'',
            phone_no: '',
        })
    }
    return (
        <div className="form">
            <Container className="contact-container">
            <Form onSubmit={e => onSubmit(e)}>
                <div className="title">Contact Form</div>
                <div className="fields">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="field-label">Name</Form.Label>
                        <Form.Control 
                        onChange={e => onInputChange(e)} value={user.name} name="name"
                        className="field-form" type="name" placeholder="Enter Full Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="field-label">Email address</Form.Label>
                        <Form.Control 
                         onChange={e => onInputChange(e)} value={user.emailid} name="emailid"
                         className="field-form" type="emailid" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhoneno">
                        <Form.Label className="field-label">Phone No</Form.Label>
                        <Form.Control 
                         onChange={e => onInputChange(e)} value={user.phone_no} name="phone_no"
                         className="field-form" type="phone_no" placeholder="Phone No." required />
                    </Form.Group>
                </div>
                <center><Button type="submit" className="btn" size="lg" block>
                    Submit
                </Button>
                </center>
            </Form>
            </Container>
        </div>
    )
}

export default Contact
