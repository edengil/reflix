import React, { Component } from 'react';
import '../styles/MovieCrad.css'
import Rented from './Rented';
import MovieCrad from './MovieCrad';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            searchInput: ""
        }
    }
    addText = (event) =>{
        const  target = event.target
        this.setState({
            searchInput: target.value
        })
    }
    getUser = () =>{
        const userId = this.props.match.params.user
        return this.props.state.users.filter(u => {return u.id === userId})
    }

    getMovies = () =>{
        const user = this.getUser()
            return(this.props.state.movies.filter(m => m.title.toLowerCase().includes(this.state.searchInput)).map(movie => 
            <Col key={movie.id} md>
            <MovieCrad 
                giveBackRentedMovie={this.props.giveBackRentedMovie}
                rentedMovie={this.props.rentedMovie}
                key={movie.id} 
                movie={movie}
                user={user}
            />
            </Col>
            ))
    }

    getRentedMovies = () =>{
        const user = this.getUser()
        const movies = this.props.state.movies
        const rentedMovies = movies.filter(m => { return m.isRented === true})
        return (rentedMovies.length === 0 ?  null:
            
            <Rented 
            movies={rentedMovies}
            giveBackRentedMovie={this.props.giveBackRentedMovie}
            user={user}
        />)
    }
    render() {
        const userId = this.props.match.params.user
        const user = this.props.state.users.filter(u => {return u.id === userId}) 

        return (
            <div>
                <Container>
                <div>
                    <div id="u-input">
                        <input 
                            type="text"
                            id="myInput" 
                            value={this.state.searchInput}
                            onChange={this.addText}
                            placeholder="Search Movie"
                        />
                    </div>
                    <div>
                    Hello {user[0].name} 🤓
                    <br></br>
                    Budget: ${user[0].budget}
                    </div>
                    <hr></hr>
                    <Row>{this.getRentedMovies()}</Row>
                </div>
                <h1>Catalog</h1>
                
                     <Row> {this.getMovies()}</Row>
                </Container>
              

            </div>)
    }
}

export default Catalog