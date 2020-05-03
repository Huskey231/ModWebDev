import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Allows button to run a function without having to assign it a function through having it call a function that returns a function
// This way we can reuse button functionality that is mostly similar
const ex1Button = (word) => {
  const handler = () => console.log("I am a ", word, " button rendering test through a function!")
  return handler
}

const App = (props) => {
  return (
    <div>
      <div>
        <button onClick={ex1Button('test')}>Test Button</button>
        <button onClick={ex1Button('sample')}>Sample Button</button>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)