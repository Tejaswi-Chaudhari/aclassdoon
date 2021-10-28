import { React, useEffect, useState } from 'react';
import axios from 'axios';
import JobIn from './JobIn'
import Jobx from './Jobx';
import Joby from './Joby';
import Jobz from './Jobz'
import Pagination from './Pagination'
import { Container, Row, Nav, NavDropdown, Col, Button } from 'react-bootstrap';
import './Cards.css'

const Job = () => {

    const [Jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [JobsPerPage] = useState(25);
    const [reset, setReset] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    console.log(Jobs)

    useEffect(() => {
        loadJobs();
    }, []);

    Jobs.sort(function (a, b) {
        return b.id - a.id;
    });

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = Jobs.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())

            })
            setJobs(filteredData)
            console.log(filteredData)
        }
        else {
            setJobs(Jobs)
        }
        setReset(true)
    }

    const loadJobs = async () => {
        const result = await axios.get("https://aclassdoon.pythonanywhere.com/api/job/");
        setJobs(result.data);
    }

    const indexOfLastCard = currentPage * JobsPerPage;
    const indexOfFirstCard = indexOfLastCard - JobsPerPage;
    const currentJobs = Jobs.slice(indexOfFirstCard, indexOfLastCard);
    const Jobsp0 = currentJobs.filter(i => i.priority === 0);
    const Jobsp1 = currentJobs.filter(i => i.priority === 1);
    const Jobsp2 = currentJobs.filter(i => i.priority === 2);
    const Jobsp3 = currentJobs.filter(i => i.priority === 3);
    const Jobsp4 = currentJobs.filter(i => i.priority === 4);
    const sp31 = [];
    const sp32 = [];
    const sp33 = [];
    const sp41 = [];
    const sp42 = [];
    const sp3len = Jobsp3.length

    if (sp3len % 2 === 0) {
        for (let i = 0; i < sp3len; i += 2) {
            sp31.push(Jobsp3[i])
            sp32.push(Jobsp3[i + 1])
        }
    }
    else {
        for (let i = 0; i < sp3len - 1; i += 2) {
            sp31.push(Jobsp3[i])
            sp32.push(Jobsp3[i + 1])
        }
        sp33.push(Jobsp3[sp3len - 1])
    }

    console.log(sp31, sp32)

    if (Jobsp4 >= Jobsp2) {
        for (let i = 0; i < Jobsp2.length; i++) {
            sp41.push(Jobsp4[i])
        }
        for (let i = Jobsp2.length; i < Jobsp4.length; i++) {
            sp42.push(Jobsp4[i])
        }
    }
    else {
        for (let i = 0; i < Jobsp4.length; i++) {
            sp41.push(Jobsp4[i])
        }
    }

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const uniqueArr = [...new Set(Jobs.map(data => data.job_category))];

    const filterData = ({ item }) => {
        let filteredData = Jobs.filter(i => i.job_category === item)
        setJobs(filteredData)
        setReset(true)
    }
    return (
        <div>
            <div className='card-start'>
                <br></br>
                <br></br>
                <Container>
                    <br></br>
                    <Nav>
                        <NavDropdown title="Filter by Category" id="basic-nav-dropdown" >
                            {uniqueArr.map((item) =>
                                <div>
                                    <NavDropdown.Item>
                                        <Button onClick={() => filterData({ item })} variant="light">{item}</Button>
                                    </NavDropdown.Item>
                                </div>
                            )}</NavDropdown>
                        <input className='search' type="text"
                            placeholder='Search...'
                            onChange={(e) => searchItems(e.target.value)}
                        />

                        <Button onClick={() => window.location.reload(false)} style={{ display: reset ? '' : 'none' }} variant='dark' className='reset-button'>
                            Reset
                        </Button>
                    </Nav>
                    <br></br>
                    <div>
                        {Jobsp0.map((item) =>
                            <Jobx key={item.id} job={item} />
                        )}
                    </div>
                    <div>
                        {Jobsp1.map((item) =>
                            <Jobx key={item.id} job={item} />
                        )}
                    </div>
                    <div>
                        <center>
                            <Row>
                                <Col lg={9} md={9}>
                                    {Jobsp2.map((item) =>
                                        <Joby key={item.id} job={item} />
                                    )}
                                </Col>
                                <Col lg={3} md={3}>
                                    {
                                        sp41 ?
                                            sp41.map((item) =>
                                                <JobIn key={item.id} job={item} />
                                            ) : null
                                    }
                                </Col>
                            </Row>
                        </center>
                    </div>
                    <div>
                        <center>
                            <Row>
                                <Col lg={6} md={6}>
                                    {sp31.map((item) =>
                                        <Jobz key={item.id} job={item} />
                                    )}
                                </Col>
                                <Col lg={6} md={6}>
                                    {
                                        sp32.map((item) =>
                                            <Jobz key={item.id} job={item} />
                                        )
                                    }
                                </Col>
                            </Row>
                        </center>
                    </div>
                    <div>
                        <Col lg={6} md={6}>
                            {
                                sp33 ?
                                    sp33.map((item) =>
                                        <Jobz key={item.id} job={item} />
                                    ) : null

                            } </Col>
                    </div>
                    <Row lg={4} md={4}>
                        {
                            sp42 ?
                                sp42.map((item) =>
                                    <JobIn key={item.id} job={item} />
                                ) : null
                        }
                    </Row>
                </Container>
                <Pagination cardsPerPage={JobsPerPage} totalCards={Jobs.length} paginate={paginate} />
            </div>
        </div>
    )
}

export default Job

