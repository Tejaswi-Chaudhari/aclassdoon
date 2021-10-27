import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import "./contact.css"

const Contact = () => {
    const [user, setUser] = useState({
        name: '',
        emailid: '',
        phone_no: '',
        message: '',
    })

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://aclassdoon.pythonanywhere.com/api/contact/", user);
        setUser({
            name: '',
            emailid: '',
            phone_no: '',
            message: '',
        })
    }
    return (

        <div className="title">
            <br></br>
            <br></br>
            <br></br>
            <h1 className="contactus display-6">Contact Us</h1>
            <hr></hr>

            <Row className="gx-5 form">
                <Col lg={4} md={12} sm={12} xs={12}>
                    <div className="box">
                        <h3 classname="display-6">Get in Touch</h3>
                        <br></br>
                        <p classname="box-t"><FontAwesomeIcon className='icon-contact' icon={faMapMarkerAlt} /> xyz, Mumbai, Maharashtra</p>
                        <p classname="box-t"><FontAwesomeIcon className='icon-contact' icon={faPhoneAlt} /> +9999999999</p>
                        <p classname="box-t"><FontAwesomeIcon className='icon-contact' icon={faEnvelope} /> abc@gmail.com</p>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={12} xs={12} className='right'>
                    <h3 className="contactform">Contact Form</h3>
                    <Form onSubmit={e => onSubmit(e)}>
                        <Row className="mb-3">
                            <Form.Group as={Col} lg={4} xs={12} sm={12} controlId="formGridname">
                                <Form.Label>Name</Form.Label>
                                <Form.Control onChange={e => onInputChange(e)} value={user.name} name="name"
                                    type="name" placeholder="Enter your Full Name" />
                            </Form.Group>

                            <Form.Group as={Col} lg={4} xs={12} sm={12} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={e => onInputChange(e)} value={user.emailid} name="emailid"
                                    type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} lg={4} xs={12} sm={12} controlId="formGridPhone_no">
                                <Form.Label>Phone No</Form.Label>
                                <Form.Control onChange={e => onInputChange(e)} value={user.phone_no} name="phone_no"
                                    type="phone_no" placeholder="Phone No" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control onChange={e => onInputChange(e)} value={user.message} name="message" rows={3}
                                as="textarea" placeholder="Write your message here" />
                        </Form.Group>

                        <Button className="button" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Contact
