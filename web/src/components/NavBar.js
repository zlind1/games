import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <Navbar bg='dark' variant='dark' expand='sm'>
      <Navbar.Brand>
        <h3>{props.title} <span className='ml-3'>{props.icon}</span></h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {props.links.map(link =>
            <NavLink as={Nav.Link} to={link[1]} style={{'color': 'lightgray'}} activeStyle={
              {'font-weight':'bold', 'color': 'white'}
            } className='m-2'>{link[0]}</NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
