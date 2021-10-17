import React from 'react'
import './Pagination.css'
import { Container } from 'react-bootstrap';

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Container className="c-pagination">
            <nav>
                <ul className='pagination'>
                    {pageNumbers.map(number =>
                        <li key={number} className="page-item">
                            <button onClick={() => paginate(number)} className="page-link">
                                {number}
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </Container>
    )
}

export default Pagination
