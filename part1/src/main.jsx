import React from 'react'
import ReactDOM from 'react-dom'


const Content = ({names, exercises}) =>{
  
  return(
    <>
        <Part name={names[0]}  exercise={exercises[0]}/>
        <Part name={names[1]}  exercise={exercises[1]}/>
        <Part name={names[2]}  exercise={exercises[2]}/>
    </>
  )
}


const Header = ({course})=>{

  return(
    <>
      <h1>{course}</h1>

    </>
  )
}

const Part= ({name, exercise})=>{
  return(
    <>
    <p>
        {name} {exercise}
      </p>
    </>
  )
}

const Total = ({exercises1, exercises2, exercises3})=>{
  return(
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content names={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))