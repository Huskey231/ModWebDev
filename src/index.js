import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Done the verbose way, returns a function so that it can work with the button call
  const NeutralHandler = () => {
    const handler = () => {
      setNeutral(neutral + 1)
    }
    return handler
  }

  // Shortened option, since we only have one return we can right the function like this rather than
  // having to write the handler out fully and return it
  const GoodHandler = () =>
    () => setGood(good + 1)

  const Average = () => {
    return (good - bad)/(good + bad + neutral)
  }

  const PerPositive = () => {
    return good / (good + bad + neutral)
  }

  return (
    <div>
      <h2>Please tell us how we did!</h2>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <button onClick={NeutralHandler()}>Neutral</button>
      <button onClick={GoodHandler()}>Good</button>
      <br></br>
      <h2>Current Statistics</h2>
      Bad: {bad}<br/>
      Neutral: {neutral}<br/>
      Good: {good}<br/>
      Average: {Average()}<br/>
      Positive: {PerPositive()}
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)