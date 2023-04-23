import React, { useState } from 'react'
import * as ReactDOMClient from 'react-dom/client';

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>  

const Tittle = (props) => <h2>{ props.text }</h2>

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const points = Array(props.anecdotes.length).fill(0)

  const [arrayPoints, setPoints] = useState(points)

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const voteAnecdote = (selectedToVote) => {
    const copy = [...arrayPoints]
    copy[selectedToVote] += 1
    setPoints(copy)
  }

  const moreVotes = () => {
    const max = Math.max(...arrayPoints)
    console.log(max)
    return(
      arrayPoints.indexOf(max)
    )
  }

  return (
    <div>
      <Tittle text="Anecdote of the day"/>
      <div>
        {props.anecdotes[selected]}
      </div>
      <div>
        has {arrayPoints[selected]} votes
      </div>
      <div>
        <Button text="vote" handleClick={() => voteAnecdote(selected)}/> 
        <Button text="next anectode" handleClick={() => setSelected(getRandomInt(props.anecdotes.length))}/>
      </div>
      <Tittle text="Anecdote with most votes"/>
      <div>
        {props.anecdotes[moreVotes()]}
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<App anecdotes={anecdotes}/>);
