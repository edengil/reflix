import React, { Component } from 'react'
import MovieCrad from './MovieCrad'
import '../styles/movie.css'

export default class Movie extends Component {
  render() {
    const match = this.props.match
    const movieId = match.params.id
    const movie = this.props.movies.filter(m => m.id === parseInt(movieId))
    return (
        <div className="text">
            <br></br>    
            <span >{movie[0].title} ({movie[0].year})</span>
            <br></br>    
            <br></br>  
            <MovieCrad  key={movieId} movie={movie[0]} isBotton="details" />
            <span>{movie[0].descrShort}</span>
        </div>
    )
  }
}
