import React, { useState } from 'react'
import * as ReactDOMClient from 'react-dom/client';

const Button = (props) => <button onClick={props
.handleClick}>{props.text}</button>

const Tittle = (props) => <h2>{props.text}</h2>

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.text2}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  
  const all = () => (good + neutral + bad)
  
  const average = () => {
    if (all() == 0){
      return 0
    }
    return (good - bad) / all()
  }
  
  const positive = () => {
    if (all() == 0){
      return 0
    }
    return good * 100 / all()
  }

  if (all() == 0){
    return (
      <table>
        <tbody><StatisticsLine text="No feedback given" /></tbody>
      </table>)
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good}/>
        <StatisticsLine text="neutral" value={neutral}/>
        <StatisticsLine text="bad" value={bad}/>
        <StatisticsLine text="all" value={all()}/>
        <StatisticsLine text="average" value={average()}/>
        <StatisticsLine text="positive" value={positive()} text2="%"/>
      </tbody>
    </table>
  )
} 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
    
  return (
    <div>
      <Tittle text="give feedback"/>
      <Button text="good" handleClick={() => setGood(good + 1)}/> 
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" handleClick={() => setBad(bad + 1)}/>
      <Tittle text="statistics"/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<App />);
