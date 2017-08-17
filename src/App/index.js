import React, { Component } from 'react';
import Book from '../Book/Book';
import RenderBooksList from '../Book/BooksList';
import { Layout } from 'antd';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/**
          * why the extra space? before the RenderBooksList
          */}

        <Layout>
          <RenderBooksList />

          <Book />
        </Layout>
      </div>
    );
  }
}

export default App;
