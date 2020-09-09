import React from 'react'

export default function Game(props) {
  const {
    params: { username, game },
  } = props.match;
  return (
    <>
      <h1>
        Username: {username}
      </h1>
      <h1>
        Game: {game}
      </h1>
    </>
  )
}
