import React, { Component } from 'react';
import Book from '../Book/Book';
import { Layout, Menu, Icon } from 'antd';
import '../App.css';

const { Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">

        <Layout>
          <Sider className='book-list' width={250} style={{ height: '100vh' }}>
            <h3>Book list</h3>

            <Menu theme="dark" mode="inline">
              { mockBooksList.map((bookItem) => <Menu.Item key={bookItem.id}>
                  <Icon type='book' />
                  <span className="nav-text">{bookItem.title}</span>
                </Menu.Item>
              )}

              <Menu.Divider />
            </Menu>
          </Sider>

          <Book />
        </Layout>
      </div>
    );
  }
}

export default App;
