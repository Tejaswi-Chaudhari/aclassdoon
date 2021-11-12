import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col, Nav } from 'react-bootstrap';
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

    const ButtonMailto = ({ mailto, label }) => {
        return (<>
            <FontAwesomeIcon className='icon-contact' icon={faEnvelope} />
            <Nav.Link
                className='contact-red'
                to='#'
                onClick={(e) => {
                    window.location = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Nav.Link>
            </>
        );
    };

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
                        {/* <iframe title="Google-map" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBVRQDsh2i4d_UBD4ut_Ah2U7jLCy7IyFU&q=34%2c%20Karanpur%2c%20Dehradun%2c%20Uttarakhand%2c%20India`}></iframe> */}
                        <p classname="box-t"><FontAwesomeIcon className='icon-contact' icon={faMapMarkerAlt} /> 34, Karanpur, Dehradun, Uttarakhand, India</p>
                        <p classname="box-t"><FontAwesomeIcon className='icon-contact' icon={faPhoneAlt} /><a className='contact-red' href={`tel:+916397211676`}> +916397211676</a></p>
                        <p classname="box-t"><ButtonMailto label={`aclassdoon@gmail.com`} mailto={`mailto:aclassdoon@gmail.com`} className='contact-red' /></p>
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
