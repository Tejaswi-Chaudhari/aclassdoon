import { React, useState } from 'react'
import { Card, Nav, Modal, Button, Col, Container } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import './Cardx.css'

const Jobx = ({ job }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        let location = job.job_location;
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
        localStorage.setItem('Jobloc', location)
    }

    const loc = localStorage.getItem('Jobloc')
    console.log('loc', loc)

    var desc = job.company_description;
    var halfSen = desc.slice(0, 100);

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
                        <div><img className="car1-img" src={`https://aclassdoon.pythonanywhere.com${job.img}`} alt="slide" /></div>
                    
                    <Card.Header as="h5" className="card-h">{job.company_name}</Card.Header>
                    <h6 className='vm'>{halfSen}<Button onClick={handleShow} variant="link" className="button-card">View More</Button></h6>
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
                    <Modal.Title id="contained-modal-title-vcenter">{job.company_name}</Modal.Title>
                </Modal.Header>
                <center>
                        <div><img className="car1-img-modal" src={`https://aclassdoon.pythonanywhere.com${job.img}`} alt="slide" /></div>
                </center>
                <Container>
                <Modal.Body>
                    <h6>Category: {job.job_category}</h6>
                    <h6>{job.company_description}</h6>
                    <h6>{job.job_description}</h6>
                    <p className="text-muted footer-txt"><a style={{ display: job.contact ? '' : 'none' }} href={`tel:${job.contact}`}>Contact Number: {job.contact}</a>
                    <a style={{ display: job.contact_1 ? '' : 'none' }} href={`tel:${job.contact_1}`}>Contact Number: {job.contact_1}</a>
                    <a style={{ display: job.contact_2 ? '' : 'none' }} href={`tel:${job.contact_2}`}>Contact Number: {job.contact_2}</a>
                    <text style={{ display: job.email_id ? '' : 'none' }}><ButtonMailto label={`Email: ${job.email_id}`} mailto={`mailto:${job.email_id}`} /></text><a href={job.company_website ? job.company_website : ''} target="_blank" rel="noreferrer">{job.company_website ? job.company_website : ''}</a><br></br><br></br> {job.job_location ? `Job Location: ${job.job_location}` : ''}<br></br>{job.posted_by ? `--${job.posted_by}` : ''}<br></br></p>                </Modal.Body>
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

export default Jobx
