import React from 'react'

import { Rate } from 'antd';

import styles from '../../css/movie_item.scss'

class MovieItem extends React.Component {
  
  render() { 
    return ( 
      <div className={styles.box} onClick={this.goDetail}>
        <img src={this.props.images.small} alt="" className={styles.img}/>
        <h4>Movie Title: {this.props.title}</h4>
        <h4>Year: {this.props.year}</h4>
        <h4>Movie Type: {this.props.genres.join(', ')}</h4>
        <Rate disabled defaultValue={this.props.rating.average/2} />
      </div>
    );
  }

  goDetail = () => {
    this.props.history.push(`/movie/detail/${this.props.id}`)
  }
}

export default MovieItem
