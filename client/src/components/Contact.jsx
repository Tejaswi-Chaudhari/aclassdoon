import React from 'react'
import {useState } from 'react';
import axios from 'axios';
import { Form, Button,Row, Col} from 'react-bootstrap';

import "./contact.css"

const Contact = () => {
    const [user, setUser] = useState({
        name: '',
        emailid:'',
        phone_no: '',
        message: '',
    })

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://127.0.0.1:8000/api/contact/", user);
        setUser({
            name: '',
            emailid:'',
            phone_no: '',
            message: '',
        })
    }
    return (
        <div className="title">
            <center><h1>Contact Form</h1></center>
            <hr></hr>
        <Row className="form">
        <Col lg={4} md={12} sm={12} xs={12}>
            <div className="box">
            <ul>Get in Touch</ul>
            </div>
            <div className="list">
           <li>xyz, Mumbai, Maharashtra</li>
           <li>+9999999999</li>
           <li>abc@gmail.com</li>
           </div>
        </Col>
            <Col lg={8} md={12} sm={12} xs={12}>
            <Form onSubmit={e => onSubmit(e)}>
                 <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridname">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={e => onInputChange(e)} value={user.name} name="name"
                            type="name" placeholder="Enter your Full Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={e => onInputChange(e)} value={user.emailid} name="emailid"
                            type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPhone_no">
                            <Form.Label>Phone No</Form.Label>
                            <Form.Control onChange={e => onInputChange(e)} value={user.phone_no} name="phone_no"
                            type="phone_no" placeholder="Phone No" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control onChange={e => onInputChange(e)} value={user.message} name="message"
                            as="textarea" placeholder="Write your message here" />
                        </Form.Group>

                        <center>
                        <Button className="button" variant="primary" type="submit">
                            Submit
                        </Button>
                        </center>
                        </Form>
                    </Col>
                </Row>
            </div>
    )
}

export default Contact
