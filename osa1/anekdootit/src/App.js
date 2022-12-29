import { useState } from 'react'

const Header = (props) => (<h1>{props.text}</h1>)

const Button = (props) => {
  return (
    <button onClick={props.handleClick} text={props.text}>{props.text}</button>
  )
}

const DisplayVotes = (props) => (<>has {props.votes} votes</>)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState( Array(7).fill(0))

  const randomInt = (ceiling) => Math.floor(Math.random() * ceiling)

  const mostVotes = () => {
    const index = votes.indexOf(Math.max.apply(Math, votes))
    return (
      anecdotes[index]
    )
  }
  
  const addVote = (anecdote) => {
    const copy = [...votes]
    copy[anecdote] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Header text={'Anecdote of the day'} />
      {anecdotes[selected]}
      <br/>
      <DisplayVotes votes={votes[selected]} />
      <br/>
      <Button handleClick={() => addVote(selected)} text={'vote'}/>
      <Button handleClick={() => setSelected(randomInt(7))} text={'next anecdote'}/>
      <Header text={'Anecdote with most votes'} />
      {mostVotes()}
    </div>
  )
}

export default App