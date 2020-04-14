import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]  

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total part={parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
//Below is the Content class from exercise one, the one in use now is the refactored one for exercise 2
// const Content = (props) => {
//   return (
//     <div>
//       <p>
//         {props.part1} {props.exercises1}
//       </p>
//       <p>
//         {props.part2} {props.exercises2}
//       </p>
//       <p>
//         {props.part3} {props.exercises3}
//       </p>
//     </div>
//   )
// }

// Refactor for exercise 2
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
    </div>
  )
}

// Addition for exercise 2
// Why doesn't this html need to be in a div when all others throw an error without the div
const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of excersises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))