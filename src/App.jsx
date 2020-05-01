// root component
import React from 'react'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'

import 'antd/dist/antd.css';
import styles from './css/app.scss'
import { Layout, Menu } from 'antd';

import HomeContainer from './components/home/HomeContainer.jsx'
import AboutContainer from './components/about/AboutContainer.jsx'
import MovieContainer from './components/movie/MovieContainer.jsx'


const { Header, Content, Footer } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentWillMount() {
    
  }

  render() { 
    return ( 
      <HashRouter>
        <Layout className="layout" style={{height: '100%'}}>
          <Header>
            <div className={styles.logo} />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={window.location.hash.split('/')[1]}>
              <Menu.Item key="home"><Link to="/home">Home</Link></Menu.Item>
              <Menu.Item key="movie"><Link to="/movie/in_theaters/1">Movie</Link></Menu.Item>
              <Menu.Item key="about"><Link to="/about">About</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ backgroundColor: '#fff', flex: 1 }}>
            <Switch>
              <Route path="/home">
                <HomeContainer></HomeContainer>
              </Route>
              <Route path="/movie">
                <MovieContainer></MovieContainer>
              </Route>
              <Route path="/about">
                <AboutContainer></AboutContainer>
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Tony Cai</Footer>
        </Layout>
      </HashRouter>
    );
  }
}
 
export default App;