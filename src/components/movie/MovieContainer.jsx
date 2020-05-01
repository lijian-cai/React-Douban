import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'

import MovieList from './MovieList.jsx'
import MovieDetail from './MovieDetail.jsx'


import { Layout, Menu } from 'antd';

const { Content, Sider } = Layout;

class MovieContainer extends React.Component {
  
  render() { 
    return ( 
      <Layout style={{ height: '100%' }}>
        <Sider width={200} style={{ backgroundColor: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={window.location.hash.split('/')[2]}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="in_theaters">
              <Link to="/movie/in_theaters/1">Now Showing</Link>
            </Menu.Item>
            <Menu.Item key="coming_soon">
              <Link to="/movie/coming_soon/1">Coming Soon</Link>
            </Menu.Item>
            <Menu.Item key="top250">
              <Link to="/movie/top250/1">Top250</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content
          style={{ backgroundColor: '#fff', flex: 1, borderLeft: '1px solid #f0f2f5', padding: 15 }}
        >
          <Switch>
            <Route path="/movie/detail/:id" component={MovieDetail}>
            </Route>
            <Route path="/movie/:type/:page" component={MovieList}>
            </Route>
          </Switch>
        </Content>
      </Layout>
    );
  }
}
 
export default MovieContainer;