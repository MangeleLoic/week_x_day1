import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import { Container, Row, Col } from 'react-bootstrap';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea';

import fantasy from './data/fantasy.json';
import React, { Component } from 'react';

class App extends Component {
  state = {
    selectedBookAsin: null,
  };

  setSelectedBookAsin = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };

  render() {
    return (
      <>
        <MyNav />
        <Container>
          <Welcome />
          <Row>
            <Col md={8}>
              <BookList books={fantasy} onBookSelect={this.setSelectedBookAsin} />
            </Col>
            <Col md={4}>
              <CommentArea asin={this.state.selectedBookAsin} />
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </>
    );
  }
}

export default App;
