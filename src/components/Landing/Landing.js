import React, { Component } from 'react';
// import { Link} from 'react-router-dom'
import User from './User/User';

import '../Landing.css'

class Landing extends Component {

    render() {
        return (
            <div> 
                
                <h1 id="home-title">WHO'S WATCHING?</h1>
                <br></br>
                <br></br>
                <div id="home-container">
                    {this.props.users.map(user => {
                        return(<User key={user.id} user={user}/>)    
                    })}
                </div>
            </div>
        );
    }
}

export default Landing;