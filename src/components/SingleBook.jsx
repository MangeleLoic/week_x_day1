import React from 'react';
import { Card } from 'react-bootstrap';

const SingleBook = ({ book, onBookSelect }) => {
  return (
    <Card onClick={() => onBookSelect(book.asin)}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;