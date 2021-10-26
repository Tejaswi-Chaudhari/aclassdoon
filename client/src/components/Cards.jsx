import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Card from './CardIn';
import Cardx from './Cardx';
import Cardy from './Cardy';
import Cardz from './Cardz'
import Pagination from './Pagination'
import { Container, Row, Nav, NavDropdown, Col, Button } from 'react-bootstrap';
import './Cards.css'
import banner from '../media/Banner.jpg'
import { Image } from 'react-bootstrap';

const Cards = () => {

    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(25);
    const [reset, setReset] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    console.log(cards)

    useEffect(() => {
        loadCards();
    }, []);

    cards.sort(function (a, b) {
        return b.id - a.id;
    });

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
        const result = await axios.get("https://aclassdoon.pythonanywhere.com/api/ad/");
        setCards(result.data);
    }

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    const cardsp0 = currentCards.filter(i => i.priority === 0);
    const cardsp1 = currentCards.filter(i => i.priority === 1);
    const cardsp2 = currentCards.filter(i => i.priority === 2);
    const cardsp3 = currentCards.filter(i => i.priority === 3);
    const cardsp4 = currentCards.filter(i => i.priority === 4);
    const sp31 = [];
    const sp32 = [];
    const sp33 = [];
    const sp41 = [];
    const sp42 = [];
    const sp3len = cardsp3.length

    if (sp3len % 2 === 0) {
        for (let i = 0; i < sp3len; i += 2) {
            sp31.push(cardsp3[i])
            sp32.push(cardsp3[i + 1])
        }
    }
    else {
        for (let i = 0; i < sp3len - 1; i += 2) {
            sp31.push(cardsp3[i])
            sp32.push(cardsp3[i + 1])
        }
        sp33.push(cardsp3[sp3len - 1])
    }

    console.log(sp31, sp32)

    if (cardsp4 >= cardsp2) {
        for (let i = 0; i < cardsp2.length; i++) {
            sp41.push(cardsp4[i])
        }
        for (let i = cardsp2.length; i < cardsp4.length; i++) {
            sp42.push(cardsp4[i])
        }
    }
    else {
        for (let i = 0; i < cardsp4.length; i++) {
            sp41.push(cardsp4[i])
        }
    }

    // const allfilter = [];
    // const filterf = [];
    // const addFilter = ({ item }) => {
    //     console.log('heyy', item, allfilter)
    //     allfilter.push(item);
    //     console.log(typeof (allfilter))
    //     localStorage.setItem('mFilters', allfilter)
    // }

    // const filterNow = () => {
    //     var x = localStorage.getItem('mFilters')
    //     var kept = x.substring(0, x.indexOf(","));
    //     var remainder = x.substring(x.indexOf(",") + 1, x.length());
    //     console.log(x, typeof (x), kept, remainder)
    //     for (let i = 0; i < x.length; i++) {
    //         let filterData = cards.filter(ele => ele.category === x[i])
    //         filterf.push(filterData)
    //     }
    //     setCards(filterf)
    // }


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
                        <Image src={banner} alt="banner" className="about-banner card" />
                    </center>
                    <hr></hr>
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
                            <div>
                                {/* {uniqueArr.map((item) =>
                                <label className="filter"><input type='checkbox' onClick={() => addFilter({ item })} /> {item}</label>
                            )}
                            <Button variant='info' onClick={() => filterNow()}>Filter</Button> */}
                            </div>
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
                            {cardsp0.map((item) =>
                                <Cardx key={item.id} card={item} />
                            )}
                        </div>
                        <div>
                            {cardsp1.map((item) =>
                                <Cardx key={item.id} card={item} />
                            )}
                        </div>
                        <div>
                            <center>
                                <Row>
                                    <Col lg={9} md={9}>
                                        {cardsp2.map((item) =>
                                            <Cardy key={item.id} card={item} />
                                        )}
                                    </Col>
                                    <Col lg={3} md={3}>
                                        {
                                            sp41 ?
                                                sp41.map((item) =>
                                                    <Card key={item.id} card={item} />
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
                                            <Cardz key={item.id} card={item} />
                                        )}
                                    </Col>
                                    <Col lg={6} md={6}>
                                        {
                                            sp32.map((item) =>
                                                <Cardz key={item.id} card={item} />
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
                                            <Cardz key={item.id} card={item} />
                                        ) : null

                                } </Col>
                        </div>
                        <Row lg={4} md={4}>
                            {
                                sp42 ?
                                    sp42.map((item) =>
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
