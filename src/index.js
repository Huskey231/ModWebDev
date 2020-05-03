import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Allows button to run a function without having to assign it a function through having it call a function that returns a function
const ex1Button = () => {
  const handler = () => console.log("I am a test button rendering test through a function!")
  return handler
}

const App = (props) => {
  return (
    <div>
      <div>
        <button onClick={ex1Button()}>Test Button</button>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)