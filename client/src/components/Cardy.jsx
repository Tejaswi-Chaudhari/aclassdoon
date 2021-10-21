import { React, useState } from 'react'
import { Card, Nav, Col, Button, Modal, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Cardy.css'

const Cardy = ({ card }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

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
                <Card className="car-1">
                    <center>
                    <br></br>
                    <Carousel responsive={responsive}>
                        <div><img className="car2-img" src={`http://127.0.0.1:8000${card.thumbnail}`} alt="slide" /></div>
                        <div><img className="car2-img" src={`http://127.0.0.1:8000${card.img1}`} alt="slide" /></div>
                        <div><img className="car2-img" src={`http://127.0.0.1:8000${card.img2}`} alt="slide" /></div>
                        <div><img className="car2-img" src={`http://127.0.0.1:8000${card.img3}`} alt="slide" /></div>
                    </Carousel>
                    </center>
                    <Button onClick={handleShow} className="button-card"><Card.Header as="h5" className="card-h">{card.business_name}</Card.Header></Button>
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
                    <Carousel responsive={responsive} className="car2-modal">
                        <div><img className="car2-img-modal" src={`http://127.0.0.1:8000${card.thumbnail}`} alt="slide" /></div>
                        <div><img className="car2-img-modal" src={`http://127.0.0.1:8000${card.img1}`} alt="slide" /></div>
                        <div><img className="car2-img-modal" src={`http://127.0.0.1:8000${card.img2}`} alt="slide" /></div>
                        <div><img className="car2-img-modal" src={`http://127.0.0.1:8000${card.img3}`} alt="slide" /></div>
                    </Carousel>
                </center>
                <Container>
                    <Modal.Body>
                        <h6>Category: {card.category}</h6>
                        <h6>{card.description}</h6>
                        <p>Services Offered: {card.services}</p><br></br>
                        <p className="text-muted footer-txt"><a href={`tel:${card.contact_no}`}>Contact Number: {card.contact_no}</a><ButtonMailto label={`Email: ${card.email}`} mailto={`mailto:${card.email}`} />{card.website ? card.website : ''}<br></br> {card.address ? `Address: ${card.address}` : ''}<br></br>{card.owner_name ? `--${card.owner_name}` : ''}<br></br></p>
                    </Modal.Body>
                </Container>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
            </Modal>
            <br></br>
        </div>                
    )

}

export default Cardy
