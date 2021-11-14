import { React, useState } from 'react'
import { Card, Nav, Col, Button, Modal, Container } from 'react-bootstrap';
import './Cardz.css'

const Cardz = ({ card }) => {

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

    var desc = card.description;
    var halfSen = desc.slice(0, 18);

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

            <Col>
                <Card className="car-3">
                    <center>                   
                        <div><img className="car3-img" src={`https://aclassdoon.pythonanywhere.com${card.thumbnail}`} alt="slide" /></div>
                    </center>
                    <Card.Header as="h5" className="card-h">{card.business_name}</Card.Header>
                    <h6 className='vm'>{halfSen}<Button onClick={handleShow} variant="link" className="button-card">View More</Button></h6>
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
                        <div><img className="car3-img-modal" src={`https://aclassdoon.pythonanywhere.com${card.thumbnail}`} alt="slide" /></div>
                </center>
                <Container>
                    <Modal.Body>
                        <h6>Category: {card.category}</h6>
                        <h6>{card.description}</h6>
                        <p style={{display: card.services? '' : 'none'}}>Services Offered: {card.services}</p><br></br>
                        <p className="text-muted footer-txt"><a style={{display: card.contact_no? '' : 'none'}} href={`tel:${card.contact_no}`}>Contact Number: {card.contact_no}</a><a style={{display: card.contact1? '' : 'none'}} href={`tel:${card.contact1}`}>Contact Number: {card.contact1}</a><a style={{display: card.contact2? '' : 'none'}} href={`tel:${card.contact2}`}>Contact Number: {card.contact2}</a>
                        <text style={{ display: card.email ? '' : 'none' }}><ButtonMailto label={`Email: ${card.email}`} mailto={`mailto:${card.email}`} /></text>
                        <a href={card.website ? card.website : ''} target="_blank" rel="noreferrer">{card.website ? card.website : ''}</a><br></br> {card.address ? `Address: ${card.address}` : ''}<br></br>{card.owner_name ? `--${card.owner_name}` : ''}<br></br></p>
                    </Modal.Body>
                </Container>
                <iframe title="Google-map" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBVRQDsh2i4d_UBD4ut_Ah2U7jLCy7IyFU&q=${loc}`}></iframe>
                <Button variant="dark" onClick={handleClose}>
                    Close
                </Button>
            </Modal>
            <br></br>
        </div>                
    )

}

export default Cardz