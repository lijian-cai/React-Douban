import React from 'react'

import MovieItem from './MovieItem.jsx'

import API from '../../utils/api.js'

import { Spin, Alert, Pagination } from 'antd';


class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: [],
      nowPage: parseInt(props.match.params.page) || 1,
      pageSize: 12,
      total: 0,
      isLoading: true,
      movieType: props.match.params.type
    }
  }
  componentDidMount() {
    this.loadMovieListByTypeAndPage()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.movieType !== nextProps.match.params.type || prevState.nowPage !== parseInt(nextProps.match.params.page)) {
      return {
        isLoading: true,
        nowPage: parseInt(nextProps.match.params.page) || 1,
        movieType: nextProps.match.params.type,
        movies: []
      }
    }
    return null
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.movies.length === 0 && this.state.isLoading) {
      this.loadMovieListByTypeAndPage()
    }
  }

  render() {
    return ( 
      <div style={{ flex: 1 }}>
        {this.renderList()}
      </div>
    );
  }

  loadMovieListByTypeAndPage = () => {
    // const start = this.state.pageSize*(this.state.nowPage-1)
    // API.get(`/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`)
    //   .then(res => {
    //     this.setState({
    //       isLoading: false,
    //       movies: res.data.subjects,
    //       total: res.data.total
    //     })
    //   })

    const data = require(`../../test_data/${this.state.movieType}.json`)
    setTimeout(() => {
      this.setState({
        isLoading: false,
        movies: data.subjects,
        total: data.total
      })
    }, 1000)
  }

  handlePageChange = (page) => {
    // window.location.href = `/#/movie/${this.state.movieType}/${page}`
    this.props.history.push(`/movie/${this.state.movieType}/${page}`)
  }

  renderList = () => {
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
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {this.state.movies.map(item => {
              return (
                <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem>
              )
            })}
          </div>
          <Pagination defaultCurrent={this.state.nowPage} pageSize={this.state.pageSize} total={this.state.total}
            onChange={this.handlePageChange}
            style={{ display: 'flex', justifyContent: 'center', padding: 20 }}
          ></Pagination>
        </div>
      )
    }
  }
}
 
export default MovieList;