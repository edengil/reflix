import React, { Component } from 'react'
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom'
import '../styles/MovieCrad.css'


export default class MovieCrad extends Component {
  rentedMovie = () => {
    this.props.rentedMovie(this.props.user[0].id,this.props.movie.id) 
  }

  giveBackRentedMovie = () => {
    this.props.giveBackRentedMovie(this.props.user[0].id,this.props.movie.id) 
  }


  render() {
    const movieId = this.props.movie.id
    console.log(`/movies/${movieId}`);
    return (
      <div>
      <Link to={`/movies/${movieId}`}>     
        <Card sx={{ minHeight: '280px', width: 180 }}>
              <CardCover>
                  <img
                  src={this.props.movie.img}
                  loading="lazy"
                  alt=""
                  />
              </CardCover>

              <CardCover
                  sx={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                  }}
              />

              <CardContent sx={{ justifyContent: 'flex-end' }}>
                  <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>

                  </Typography>
              </CardContent>
          </Card>
        </Link>

        <div id="buttonCars">
            {this.props.isBotton === "details"? 
            ""
          : 
          this.props.isBotton === "rented" 
          ? 
          <Fab color="primary" aria-label="add"
          onClick={this.giveBackRentedMovie}
          >
            <RemoveIcon fontSize="small"/>
          </Fab>
          :
          <Fab color="primary" aria-label="add"
          
          onClick={this.rentedMovie}
          >
            <AddIcon fontSize="small"/>
          </Fab>
          }
        </div>
      </div>
    )
  }
}
