import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Card from './CardIn';
import { Container, Row } from 'react-bootstrap';
import './Cards.css'

const Cards = () => {

    const [cards, setCards] = useState([])
    useEffect(() => {
        loadCards();
    }, []);

    const loadCards = async () => {
        const result = await axios.get("http://127.0.0.1:8000/api/ad/");
        setCards(result.data);
    }
    console.log(cards)

    return (
        <div className='card-start'>
            <Container>
                <Row lg={3}>
                {cards.map((item) =>
                    <Card key={item.id} card={item} />
                )}
                </Row>
            </Container>
        </div>
    )
}

export default Cards
