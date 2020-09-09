import React from 'react'
import { Container, Form } from 'react-bootstrap'

export default class Signup extends React.Component {
  render() {
    return (
      <Container>
        <Form onSubmit={this.signup}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder='username' ref={this.usernameField}/>
          </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder='password' type='password' ref={this.passwordField}/>
            </Form.Group>
          <Form.Control type='submit'/>
        </Form>
      </Container>
    )
  }
}
