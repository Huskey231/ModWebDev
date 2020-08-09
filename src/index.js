import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))

  const Randomizer = () => {
    const handler = () => {
      setSelected(Math.floor((Math.random() * 100) % 6))
    }
    return handler
  }
  
  const Incrementer = (selected) => {
    const handler = () => {
      const copy = [...votes]
      copy[selected]++
      setVotes(copy)  
    }
    return handler  
  }    

  const Looper = (length) =>{
    let highestVoted = 0;
    for(var i = 0; i < length; i++){
      if(votes[i] > votes[highestVoted]){
        highestVoted = i;
      }
    }
    return highestVoted;
  }

  return (
    <div>
      {props.anecdotes[selected]}<br/>
      <p>This quote has {votes[selected]} votes</p>
      <button onClick={Randomizer()}>Show new</button>
      <button onClick={Incrementer(selected)}>Vote</button>
      <h3>Highest Voted Quote</h3>
      <p>{props.anecdotes[Looper(votes.length)]}</p>
    </div>
  )
}

const Randomizer = () => {
  return Math.floor((Math.random() * 100) % 6)
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)