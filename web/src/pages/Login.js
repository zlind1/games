import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import Cookie from '../util/Cookie'
import { POST } from '../util/Requests'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.usernameField = React.createRef()
    this.passwordField = React.createRef()
    this.state = {
      needsRedirect: false
    }
  }
  login = async(e) => {
    let username = this.usernameField.current.value
    let password = this.passwordField.current.value
    e.preventDefault()
    let response = await POST('users/login', {
      username: username,
      password: password
    })
    if (response.success) {
      Cookie.set('user', username)
      await this.setState({needsRedirect: true})
    } else {
      console.log(response.error)
    }
  }
  render() {
    return this.state.needsRedirect ? (
      <Redirect to={`/games/${this.usernameField.current.value}`}/>
    ) : (
      <Container>
        <Form onSubmit={this.login}>
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
