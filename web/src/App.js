import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path='/'>
        <Redirect to='/home'/>
      </Route>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/player/login' component={Login}/>
      <Route exact path='/admin/login'>
        <Login isAdmin={true}/>
      </Route>
    </BrowserRouter>
  )
}
