import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const DisplayTitle = ({text}) => <h1>{text}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const DisplayFeedback = props => <div>{props.text} {props.rating}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeedback = () => {
    setGood(good + 1)
  }

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const handleBadFeedback = () => {
    setBad(bad + 1)
  }

  return (
    <div>
    <DisplayTitle text={"give feedback"} />
    <Button handleClick={handleGoodFeedback} text={"good"} />
    <Button handleClick={handleNeutralFeedback} text={"neutral"} />
    <Button handleClick={handleBadFeedback} text={"bad"} />
    <DisplayTitle text={"statistics"}/>
    <DisplayFeedback text={"good"} rating={good}/>
    <DisplayFeedback text={"neutral"} rating={neutral}/>
    <DisplayFeedback text={"bad"} rating={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)