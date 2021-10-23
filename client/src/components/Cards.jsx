import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Card from './CardIn';
import Cardx from './Cardx';
import Cardy from './Cardy'
import Pagination from './Pagination'
import { Container, Row, Nav, NavDropdown, Col, Button } from 'react-bootstrap';
import './Cards.css'
import banner from '../media/banner2.png'
import { Image } from 'react-bootstrap';

const Cards = () => {

    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(9);
    const [reset, setReset] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        loadCards();
    }, []);


    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = cards.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())

            })
            setCards(filteredData)
            console.log(filteredData)
        }
        else {
            setCards(cards)
        }
        setReset(true)
    }

    const loadCards = async () => {
        const result = await axios.get("https://aclassdoon.herokuapp.com/api/ad/");
        setCards(result.data);
    }
    console.log(cards)

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    const cardsp1 = currentCards.filter(i => i.priority === 1);
    const cardsp2 = currentCards.filter(i => i.priority === 2);
    const cardsp3 = currentCards.filter(i => i.priority === 3);
    const cardssp2 = cards.filter(i => i.priority === 2);
    const cardssp3 = cards.filter(i => i.priority === 3);
    const sp31 = [];
    const sp32 = [];

    if (cardsp3 >= cardsp2) {
        for (let i = 0; i < cardsp2.length; i++) {
            sp31.push(cardsp3[i])
        }
        for (let i = cardsp2.length; i < cardsp3.length; i++) {
            sp32.push(cardsp3[i])
        }
    }
    else {
        for (let i = 0; i < cardsp3.length; i++) {
            sp31.push(cardsp3[i])
        }
    }

    console.log(cardssp2, cardssp3)

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

                        <input type="text"
                            placeholder='Search...'
                            onChange={(e) => searchItems(e.target.value)}
                        />

                        <Button onClick={() => window.location.reload(false)} style={{ display: reset ? '' : 'none' }} variant='primary' className='reset-button'>
                            Reset
                        </Button>
                    </Nav>
                    <br></br>
                    <div>
                        {cardsp1.map((item) =>
                            <Cardx key={item.id} card={item} />
                        )}
                    </div>
                    <div>
                        <center>
                            <Row>
                                <Col lg={8}>
                                    {cardsp2.map((item) =>
                                        <Cardy key={item.id} card={item} />
                                    )}
                                </Col>
                                <Col lg={4}>
                                    {
                                        sp31 ?
                                            sp31.map((item) =>
                                                <Card key={item.id} card={item} />
                                            ) : null
                                    }
                                </Col>
                            </Row>
                        </center>
                    </div>
                    <Row lg={3}>
                        {
                            sp32 ?
                                sp32.map((item) =>
                                    <Card key={item.id} card={item} />
                                ) : null
                        }
                    </Row>
                </Container>
                <Pagination cardsPerPage={cardsPerPage} totalCards={cards.length} paginate={paginate} />
            </div>
        </div>
    )
}

export default Cards
