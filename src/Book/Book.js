import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Layout } from 'antd';
const { Content } = Layout;

const RenderBook = ({bookId, books}) => {

  const emptyBook = {title: "Please select a book :-)", description: ''};
  const bookIndex = _.findIndex(books, x => x.id === bookId);
  const book = bookIndex !== -1 ? books[bookIndex] : emptyBook;

  return (
    <Layout>
      <Content className='book-content'>
        <h1>
          {book.title}
        </h1>

        <p>
          {book.description}
        </p>

      </Content>
    </Layout>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    bookId: state.BooksReducer.bookId,
    books: state.BooksReducer.books,
  }
}

const Book = connect(
  mapStateToProps,
)(RenderBook)

export default Book;
