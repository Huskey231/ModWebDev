import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const newButton = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const statistics = (props) => <div>{props.text}, : , {props.value}</div>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Please tell us how we did!</h2>
      <newButton handleClick={ () => setBad(bad + 1)} text='Bad'/> 
      <newButton handleClick={ () => setNeutral(neutral + 1)} text='Neutral'/>
      <newButton handleClick={ () => setGood(good + 1)} text='Good'/>
      <br></br>
      <h2>Current Statistics</h2>
      <statistics text='Good' value={good} />
      <statistics text='Neutral' value ={neutral}/>
      <statistics text='Bad' value ={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)