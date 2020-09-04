import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <Navbar bg='dark' variant='dark' expand='sm'>
      <Navbar.Brand>
        <h3>{props.title} <span className='ml-3'>{props.icon}</span></h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {props.links.map(link => <Nav.Link>
            <Link to={link[1]} className='text-white'>{link[0]}</Link>
          </Nav.Link>)}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
