import React from 'react'
import ReactDOM from 'react-dom'

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
      <h1><Header header={course}/> </h1>
      <p>
        <Content content={part1} number={exercises1}/>
      </p>
      <p>
        <Content content={part2} number={exercises2}/> 
      </p>
      <p>
        <Content content={part3} number={exercises3}/> 
      </p>
      <p><Total total={exercises1 + exercises2 + exercises3} /> </p>
    </div>
  )
}

const Header = (props) => {

    return(
        <div>
            {props.header}    
        </div>
    )
}

const Content = (props) => {

    return(
        <div>
            {props.content} {props.number}
        </div>
    )
}

const Total = (props) => {

    return(
        <div>
            Number of exercises {props.total} 
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))