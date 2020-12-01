import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const DisplayTitle = ({text}) => <h1>{text}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticsLine = ({text,value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>   
    </tr>
  )
}

const Statistics = ({good,neutral,bad}) =>{
  const all = good + neutral + bad

  if (all === 0) {
    return (
      <div>
      <h1>statistics</h1>
      No feedback yet
      </div>
    )
  }

  return(
    <div>
    <h1>statistics</h1>
    <table>
      <tbody>
       <StatisticsLine text={"good "} value={good}/>
       <StatisticsLine text={"neutral "} value={neutral}/>
       <StatisticsLine text={"bad "} value={bad}/>
       <StatisticsLine text={"all "} value={all}/>
       <StatisticsLine text={"average "} value={(good-bad)/all}/>
       <StatisticsLine text={"positive "} value={`${(good/all)*100} %`}/>
       </tbody>
    </table>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <DisplayTitle text={"give feedback"} />
    <Button handleClick={() => setGood(good+1)} text={"good"} />
    <Button handleClick={() => setNeutral(neutral+1)} text={"neutral"} />
    <Button handleClick={() => setBad(bad+1)} text={"bad"} />
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)