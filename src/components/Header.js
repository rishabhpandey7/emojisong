import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import { BrowserRouter as Router } from 'react-router-dom'; 

export default class extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Router>    
        <NavLink className="navbar-brand" to="/">
          emoji{' '}
          <span role="img" aria-label="hand">
            ✌️
          </span>{' '}
          song
        </NavLink>
        </Router>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Router>
              <NavLink exact className="nav-link" to="/">
                <span role="img" aria-label="loupe">
                  🔎
                </span>{' '}
                browse
              </NavLink>
              </Router>
            </li>
            <li className="nav-item">
              <Router>
              <NavLink exact className="nav-link" to="/add">
                <span role="img" aria-label="plus">
                  ➕
                </span>{' '}
                add
              </NavLink>
              </Router>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
