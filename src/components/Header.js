import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import { BrowserRouter as Router } from 'react-router-dom'; 
import { Nav, Navbar } from 'react-bootstrap'

export default class extends Component {
  render() {
    return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">emojisong</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">🔎 browse</Nav.Link>
          <Nav.Link href="#link">➕ add</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }
}
