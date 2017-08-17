import React from 'react';
import { connect } from 'react-redux';
import { Menu, Layout, Icon } from 'antd';
import { selectBook } from './Actions';

const { Sider } = Layout;

const RenderBooksList = (props) => {
  return (
    <Sider className='book-list' width={250} style={{ height: '100vh' }}>
      <h3>Book list</h3>

      {/**
        * forgot the ';' and space between brackets {}
        */}
      <Menu theme="dark" mode="inline" onClick={({key}) => { props.onBookClick(key); }}>
        {
          props.books.map((bookItem) => <Menu.Item key={bookItem.id}>
              <Icon type='book' />
              <span className="nav-text">{bookItem.title}</span>
            </Menu.Item>
          )
        }

        <Menu.Divider />
      </Menu>
    </Sider>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    books: state.BooksReducer.books,
  }
}

// prefer one line dispatch functions
// do not forget the comma (,) and the semi-colon (;)
// in case the function should be more than one line, it should be encapsulated in an handler function
const mapDispatchToProps = dispatch => {
  return {
    onBookClick: id => {
      dispatch(selectBook(Number(id)))
    }
  }
}

const BooksList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RenderBooksList)

export default BooksList;
