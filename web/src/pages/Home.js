import React from 'react'
import NavBar from '../components/NavBar'
import { FaGamepad } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <NavBar title='ZLGames' icon={<FaGamepad/>} links={[
        ['Admin', '/admin/login'],
        ['Player', '/player/login'],
        ['Signup', '/player/signup']
      ]}/>

    </>
  )
}
