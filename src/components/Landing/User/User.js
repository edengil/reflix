import React, { Component } from 'react'
import { Link} from 'react-router-dom'

export default class User extends Component {
  render() {
    return (
        <div id={this.props.user.name} >
            <Link to={`/catalog/${this.props.user.id}`}>
                <span className="main-directory-text">{this.props.user.name}</span>
            </Link>
      </div>
    )
  }
}
