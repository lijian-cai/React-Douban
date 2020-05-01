import React from 'react'

import { Button, Spin, Alert } from 'antd';

import API from '../../utils/api.js'


class MovieDetail extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      id: this.props.match.params.id,
      info: {},
      isLoading: true
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    API.get(`/v2/movie/subject/${this.state.id}`)
      .then(res => {
        this.setState({
          info: res.data,
          isLoading: false
        })
      })
  }

  render() { 
    return ( 
      <div>
        <Button type="primary" onClick={this.goBack}>
          &lt; Back
        </Button>
        {this.renderInfo()}
      </div>
    );
  }

  renderInfo = () => {
    if(this.state.isLoading){
      return (
        <Spin tip="Loading...">
          <Alert
            message="Please wait.."
            description="Loading Movies..."
            type="info"
          />
        </Spin>
      )
    }else{
      return (
        <div>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <h1>{this.state.info.title}</h1>
            <img src={this.state.info.images.large} alt=""/>
          </div>
          <p style={{ textIndent: '2em', lineHeight: '30px' }}>{this.state.info.summary}</p>
        </div>
      )
    }
  }

  goBack = () => {
    this.props.history.go(-1)
  }
}

export default MovieDetail
