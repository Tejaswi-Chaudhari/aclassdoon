import React from 'react';
import { Card, Col, Carousel } from 'react-bootstrap';
import './CardIn.css'

const CardIn = ({ card }) => {
    return (
        <div>
            <Col lg={12}>
                <Card className="card">
                    {/* <Card.Img className="card-img" variant="top" src={`http://127.0.0.1:8000${card.thumbnail}`} /> */}
                    <Carousel fade nextLabel="" prevLabel="">
                        <Carousel.Item>
                            <img
                                className="card-img"
                                src={`http://127.0.0.1:8000${card.thumbnail}`}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="card-img"
                                src={`http://127.0.0.1:8000${card.img1}`}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="card-img"
                                src={`http://127.0.0.1:8000${card.img2}`}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="card-img"
                                src={`http://127.0.0.1:8000${card.img3}`}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Header as="h5" className="card-h">{card.business_name}</Card.Header>
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
