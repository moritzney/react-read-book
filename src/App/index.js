import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import '../App.css';

const { Sider, Content } = Layout;
const mockBooksList = [
  {id: 1, title: 'Book1', description: 'desc1', status: 'READ'},
  {id: 2, title: 'Book2', description: 'desc2', status: 'READ'},
  {id: 3, title: 'Book3', description: 'desc3', status: 'READ'},
];

class App extends Component {
  render() {
    return (
      <div className="App">

        <Layout>
          <Sider width={250} style={{ height: '100vh' }}>
            <Menu theme="dark" mode="inline">
              { mockBooksList.map((bookItem) => <Menu.Item key={bookItem.id}>
                  <Icon type='book' />
                  <span className="nav-text">{bookItem.title}</span>
                </Menu.Item>
              )}
              <Menu.Divider />
            </Menu>
          </Sider>

          <Content style={{ margin: '20px' }}>
            Main Content
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
