import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './CardIn.css'

const CardIn = ({ card }) => {
    return (
        <div>
            <Col lg={4}>
                <Card className="card">
                    <Card.Img className="card-img" variant="top" src={`http://127.0.0.1:8000${card.thumbnail}`} />
                    <Card.Header as="h5">{card.business_name}</Card.Header>
                    <Card.Body>
                        <Card.Title as="h6">Category: {card.category}</Card.Title>
                        <Card.Text>
                            <h6>{card.description}</h6>
                            <p>Services Offered: {card.services}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <p>Contact Number: {card.contact_no}<br></br>Email ID: {card.email}</p>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    )
}

export default CardIn
