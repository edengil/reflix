import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import MovieCrad from './MovieCrad';
import Col from 'react-bootstrap/Col';
import '../styles/MovieCrad.css'


export default class Rented extends Component {
  render() {
    const movies = this.props.movies
    return (
      <span>
      <h1>Rented Movies</h1>
      <div className='row'>
        {movies.map(m => 
        <Col md>
            <MovieCrad 
              key={m.id}
              movie={m}
              user={this.props.user}
              isBotton="rented"
              giveBackRentedMovie={this.props.giveBackRentedMovie}
            />
        </Col>
        )}
      </div>
      </span>
    )
  }
}
