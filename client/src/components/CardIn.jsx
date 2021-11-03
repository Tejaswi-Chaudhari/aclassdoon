import { React, useState } from 'react';
import { Card, Col, Carousel, Button, Modal, Container, Nav} from 'react-bootstrap';
import './CardIn.css'

const CardIn = ({ card }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        let location = card.address;
        for (let i = 0; i < 21; i++) {
            console.log(location, typeof (location));
            location = location.replace(' ', '%20');
        }
        console.log(location)
        for (let i = 0; i < 26; i++) {
            console.log(location, typeof (location));
            location = location.replace(',', '%2C');
        }
        console.log(location)
        localStorage.setItem('Adloc', location)
    }

    const loc = localStorage.getItem('Adloc')
    console.log('loc', loc)

    const ButtonMailto = ({ mailto, label }) => {
        return (<>
            <Nav.Link
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
        <div>
            <Col lg={12}>
                <Card className="card-in">
                    <br></br>
                    {/* <Card.Img className="card-img" variant="top" src={`https://aclassdoon.pythonanywhere.com${card.thumbnail}`} /> */}
                    <Carousel fade nextLabel="" prevLabel="">
                        <Carousel.Item>
                            <img
                                className="card-img"
                                src={`https://aclassdoon.pythonanywhere.com${card.thumbnail}`}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="card-img"
                                src={`https://aclassdoon.pythonanywhere.com${card.img1}`}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="card-img"
                                src={`https://aclassdoon.pythonanywhere.com${card.img2}`}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="card-img"
                                src={`https://aclassdoon.pythonanywhere.com${card.img3}`}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Header className="card-h in">{card.business_name}</Card.Header>
                    <center>
                    <h6 className='vm'><Button onClick={handleShow} variant="link" className="button-card">View More</Button></h6>
                    </center>
                </Card>
            </Col>
            <br></br>

            <Modal
                size="lg"
                centered
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header className="modal-h">
                    <Modal.Title id="contained-modal-title-vcenter">{card.business_name}</Modal.Title>
                </Modal.Header>
                <center>
                    <Carousel variant="dark" className="carousel-dark" fade nextLabel="Next" prevLabel="Previous">
                        <Carousel.Item>
                            <img
                                className="cardimg"
                                src={`https://aclassdoon.pythonanywhere.com${card.thumbnail}`}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="cardimg"
                                src={`https://aclassdoon.pythonanywhere.com${card.img1}`}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="cardimg"
                                src={`https://aclassdoon.pythonanywhere.com${card.img2}`}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="cardimg"
                                src={`https://aclassdoon.pythonanywhere.com${card.img3}`}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </center>
                <Container>
                <Modal.Body>
                    <h6>Category: {card.category}</h6>
                    <h6>{card.description}</h6>
                    <p>Services Offered: {card.services}</p><br></br>
                    <p className="text-muted footer-txt"><a href={`tel:${card.contact_no}`}>Contact Number: {card.contact_no}</a><ButtonMailto label={`Email: ${card.email}`} mailto={`mailto:${card.email}`} /><a href={card.website ? card.website : ''} target="_blank" rel="noreferrer">{card.website ? card.website : ''}</a><br></br> {card.address ? `Address: ${card.address}` : ''}<br></br>{card.owner_name ? `--${card.owner_name}` : ''}<br></br></p>
                </Modal.Body>
                </Container>
                <iframe title="Google-map" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBVRQDsh2i4d_UBD4ut_Ah2U7jLCy7IyFU&q=${loc}`}></iframe>
                <Button variant="info" onClick={handleClose}>
                    Close
                </Button>
            </Modal>
            <br></br>
        </div>
    )
}

export default CardIn
