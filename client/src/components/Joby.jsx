import { React, useState } from 'react'
import { Card, Nav, Col, Button, Modal, Container } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import './Cardy.css'

const Joby = ({ job }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var desc = job.company_description;
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

            <Col lg={12}>
                <Card className="car-2">
                    <center>
                    <br></br>                   
                        <div><img className="car2-img" src={`https://aclassdoon.pythonanywhere.com${job.img}`} alt="slide" /></div>
                    </center>
                    <Card.Header as="h5" className="card-h">{job.company_name}</Card.Header>
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
                    <Modal.Title id="contained-modal-title-vcenter">{job.company_name}</Modal.Title>
                </Modal.Header>
                <center>
                        <div><img className="car2-img-modal" src={`https://aclassdoon.pythonanywhere.com${job.img}`} alt="slide" /></div>
                </center>
                <Container>
                <Modal.Body>
                    <h6>Category: {job.job_category}</h6>
                    <h6>{job.company_description}</h6>
                    <h6>{job.job_description}</h6>
                    <p className="text-muted footer-txt"><a href={`tel:${job.contact}`}>Contact Number: {job.contact}</a><ButtonMailto label={`Email: ${job.email_id}`} mailto={`mailto:${job.email_id}`} /><a href={job.company_website ? job.company_website : ''} target="_blank" rel="noreferrer">{job.company_website ? job.company_website : ''}</a><br></br> {job.job_location ? `Job Location: ${job.job_location}` : ''}<br></br>{job.posted_by ? `--${job.posted_by}` : ''}<br></br></p>
                </Modal.Body>
                </Container>
                <Button variant="dark" onClick={handleClose}>
                    Close
                </Button>
            </Modal>
            <br></br>
        </div>                
    )

}

export default Joby
