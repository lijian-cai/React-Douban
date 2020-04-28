import React from 'react'

import { Layout, Menu } from 'antd';

const { Content, Sider } = Layout;

class MovieContainer extends React.Component {
  
  render() { 
    return ( 
      <Layout style={{ height: '100%' }}>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1">Now Showing</Menu.Item>
            <Menu.Item key="2">Coming Soon</Menu.Item>
            <Menu.Item key="3">Top250</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ paddingLeft: '1px' }}>
          <Content
            style={{
              padding: 10,
              margin: 0,
              minHeight: 280,
              backgroundColor: '#fff'
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
 
export default MovieContainer;