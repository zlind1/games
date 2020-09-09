import React from 'react'
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { FaGamepad } from 'react-icons/fa'
import NavBar from '../components/NavBar'
import Cookie from '../util/Cookie'
import { GET } from '../util/Requests'

export default class UserGames extends React.Component {
  constructor(props) {
    super(props)
    this.state = {redirect: ''}
    const {
      params: { username },
    } = props.match
    this.username = username
    this.checkUser()
  }
  checkUser = async() => {
    let user = await GET(`users?username=${this.username}`)
    if (user.Count === 0) {
      await this.setState({redirect: '/home'})
    }
  }
  render() {
    let userCookie = Cookie.get('user')
    return (
      <>
        {this.state.redirect !== '' ? <>
          <Redirect to={this.state.redirect}/>
        </> : ''}
        {userCookie === null ? <>
          <NavBar title='ZLGames' icon={<FaGamepad/>} links={[
            ['Login', '/account/login'],
            ['Signup', '/account/signup']
          ]}/>
        </> : <>
          <NavBar title='ZLGames' icon={<FaGamepad/>} links={[
            ['Home', '/home'],
            ['My games', `/games/${userCookie}`],
            ['Logout', '/account/logout']
          ]}/>
        </>}
        <h1>
          {this.username}
        </h1>
        {this.username === userCookie ? <>
          <Button>Create game</Button>
        </> : <>
          <Button>Follow @{this.username}</Button>
        </>}
      </>
    )
  }
}
