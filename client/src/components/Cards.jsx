import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Card from './CardIn';
import Cardx from './Cardx';
import Cardy from './Cardy'
import Pagination from './Pagination'
import { Container, Row, Nav, NavDropdown, Form, FormControl, Col, Button } from 'react-bootstrap';
import './Cards.css'
import banner from '../media/acdbanner.jpg'
import { Image } from 'react-bootstrap';

const Cards = () => {

    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(9);
    const [reset, setReset] = useState(false);
    const [search, setSearch] = useState("");

    const onInputChange = e => {
        setSearch({search: e.target.value})
    }

    const onSubmit = async (e) => {
        console.log(Object.values(search))
        e.preventDefault();
        let searchedData = cards.filter(i => i.business_name === Object.values(search))
        setCards(searchedData)
        setReset(true)
        setSearch('')
    }

    useEffect(() => {
        loadCards();
    }, []);

    const loadCards = async () => {
        const result = await axios.get("http://127.0.0.1:8000/api/ad/");
        setCards(result.data);
    }
    console.log(cards)

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    const cardsp1 = currentCards.filter(i => i.priority === 1);
    const cardsp2 = currentCards.filter(i => i.priority === 2);
    const cardsp3 = currentCards.filter(i => i.priority === 3);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const uniqueArr = [...new Set(cards.map(data => data.category))];

    const filterData = ({ item }) => {
        let filteredData = cards.filter(i => i.category === item)
        setCards(filteredData)
        setReset(true)
    }
    return (
        <div>
            <div className='card-start'>
                <Container>
                    <center>
                        <Image src={banner} alt="banner" className="about-banner" />
                    </center>
                    <hr></hr>
                    <br></br>
                    <Nav>
                        <NavDropdown title="Filter by Category" id="basic-nav-dropdown">
                            {uniqueArr.map((item =>
                                <NavDropdown.Item><Button onClick={() => filterData({ item })} variant="light">{item}</Button></NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Button onClick={() => window.location.reload(false)} style={{display: reset? '': 'none'}} variant='primary'>
                            Reset
                        </Button>
                        <Form onSubmit={e => onSubmit(e)}>
                            <Row>
                                <Col>
                                    <FormControl
                                        onChange={e => onInputChange(e)}
                                        defaultvalue={search}
                                        name="search"
                                        type="text" placeholder="Search" className="searchbar"
                                        aria-label="Search"
                                        />
                                </Col>
                                <Col>
                                    <Button type="submit" variant="primary">Search</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Nav>
                    <br></br>
                    <div>
                        {cardsp1.map((item) =>
                            <Cardx key={item.id} card={item} />
                        )}
                    </div>
                    <div>
                        {cardsp2.map((item) =>
                            <Cardy key={item.id} card={item} />
                        )}
                    </div>
                    <Row lg={3}>
                        {cardsp3.map((item) =>
                            <Card key={item.id} card={item} />
                        )}
                    </Row>
                </Container>
                <Pagination cardsPerPage={cardsPerPage} totalCards={cards.length} paginate={paginate} />
            </div>
        </div>
    )
}

export default Cards
