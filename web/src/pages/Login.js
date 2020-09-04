import React from 'react'

export default function Login(props) {
  return (
    <>
      login time
      {props.isAdmin ? ' for admin' : ' for player'}
    </>
  )
}
