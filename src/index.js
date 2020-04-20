import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  // Defines the function that we imported at the top
  const [ counter, setCounter ] = useState(0)
  // Counter is set to zero because of the useState(0) part, and setCounter is set to a function that modifies state
// After the first time when this function is called useState grabs the current value of counter and assigns it here

  // Increments the counter through grabbing the current counter point
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  // () => .... is the function to incrememnt being executed by setTimeout and 1000 is the timeout length (1 second)
  // When setcounter is called it changes the state which the forces a re-render to take place
  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}

// The number being rendered will always be the old number hence return {counter} while the new number is being processed,
// once the method completes it is then printed on screen

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)