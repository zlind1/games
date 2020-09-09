import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Home, Login, Logout, UserGames, Game } from './pages'

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path='/'>
        <Redirect to='/home'/>
      </Route>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/account/login' component={Login}/>
      <Route exact path='/account/logout' component={Logout}/>
      <Route exact path='/games/:username' component={UserGames}/>
      <Route exact path='/games/:username/:game' component={Game}/>
      <Route exact path='/games/:username/:game/edit' component={Game}/>
      <Route exact path='/games/:username/:game/play' component={Game}/>
    </BrowserRouter>
  )
}
