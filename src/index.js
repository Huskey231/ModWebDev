import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const DynamicButton = (props) => {
  return <button onClick={props.handler}>{props.text}</button>
}

const Statistic = ({name, stat}) => {
  return <span>{name}: {stat}</span>
}

const Statistics = (props) => {
  const average = (props.good - props.bad)/(props.good + props.bad + props.neutral)
  const per_positive = props.good / (props.good + props.bad + props.neutral)
  if (props.good + props.neutral + props.bad > 0) {
    return (
      <div>
      <h2>Current Statistics</h2>
      <Statistic name="Bad" stat={props.bad}/><br/>
      <Statistic name="Neutral" stat={props.neutral}/><br/>
      <Statistic name="Good" stat={props.good}/><br/>
      <Statistic name="Average" stat={average}/><br/>
      <Statistic name="Positive" stat={per_positive}/>%<br/>
      </div>
    )  
  }
  else {
    return (
      <div>
      <h2>Current Statistics</h2>
      No feedback given
      </div>
    )
    }
}

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

  return (
    <div>
      <h2>Please tell us how we did!</h2>
      <DynamicButton text="Bad" handler={() => setBad(bad + 1)}/>
      <DynamicButton text="Neutral" handler={() => setNeutral(neutral + 1)}/>
      <DynamicButton text="Good" handler={() => setGood(good + 1)}/>
      <br></br>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)