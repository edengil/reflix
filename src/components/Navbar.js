import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import n from './n.png'
import './Navbar.css';

// console.log(n);


class Navbar extends Component {
    render() {
        return (
            <div>
                <span >
                    <Link to="/">
                        <img className="logo" 
                            src={n}
                            loading="lazy"
                            alt=""
                        />
                        <span id="main-links">Home</span>
                    </Link>
                    <Link to="/catalog/50xx11"><span id="main-links">Catalog</span></Link>
                </span>
            </div>)
    }
}

export default Navbar