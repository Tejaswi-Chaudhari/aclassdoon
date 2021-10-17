import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import "./contact.css"

const Contact = () => {
    return (
        <div className="form">
            <Container className="contact-container">
            <Form>
                <div className="title">Contact Form</div>
                <div className="fields">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="field-label">Name</Form.Label>
                        <Form.Control className="field-form" type="text" placeholder="Enter Full Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="field-label">Email address</Form.Label>
                        <Form.Control className="field-form" type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhoneno">
                        <Form.Label className="field-label">Phone No</Form.Label>
                        <Form.Control className="field-form" type="number" placeholder="Phone No." required />
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
