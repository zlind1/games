import React from 'react'
import { Container } from 'react-bootstrap'
import { FaGamepad } from 'react-icons/fa'
import NavBar from '../components/NavBar'
import Cookie from '../util/Cookie'

export default function Home() {
  let userCookie = Cookie.get('user')
  return (
    <>
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
      <Container>
        <h1>Play, create, share games</h1>
        <h3>Features</h3>
        <ul>
          <li>Community built game library</li>
          <li>Built in code editor</li>
          <li>Learn to create games in Javascript</li>
          <li>Post games publicly or save privately to your profile</li>
          <li>View source code of any game</li>
        </ul>
        <h3>Create an account today to get started, or browse as a guest</h3>
      </Container>
    </>
  )
}
