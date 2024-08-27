import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import { Container, Row, Col } from 'react-bootstrap';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea';

import fantasy from './data/fantasy.json';


import React, { useState } from 'react';

const App = () => {
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);

  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <Row>
          <Col md={8}>
            <BookList books={fantasy} onBookSelect={setSelectedBookAsin} />
          </Col>
          <Col md={4}>
            <CommentArea asin={selectedBookAsin} />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};

export default App;