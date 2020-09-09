import React from 'react'
import { Redirect } from 'react-router-dom'
import Cookie from '../util/Cookie'

export default function Logout() {
  Cookie.delete('user')
  return <Redirect to='/home'/>
}
