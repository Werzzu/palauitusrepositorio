import { useState } from 'react'

const Header = (props) => ( <h1>{props.title}</h1> )

const StatisticLine = (props) => ( <tr><td>{props.text}</td><td>{props.value}</td></tr> )

const Statistics = (props) => { 
  const sum = props.stats[0].value + props.stats[1].value + props.stats[2].value
  const average = (props.stats[0].value - props.stats[2].value) / sum
  const positive = props.stats[0].value / sum * 100 + "%"
  if (sum > 0) {
  return (
    <table>
    <StatisticLine text={props.stats[0].text} value={props.stats[0].value} />
    <StatisticLine text={props.stats[1].text} value={props.stats[1].value} />
    <StatisticLine text={props.stats[2].text} value={props.stats[2].value} />
    <StatisticLine text={'all'} value={sum} />
    <StatisticLine text={'average'} value={average} />
    <StatisticLine text={'positive'} value={positive} />
    </table>
  )
}
else {
  return (
    <p>No feedback given</p>
  )
}
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const stats = [
    {text: "good", value: good},
    {text: "neutral", value: neutral},
    {text: "bad", value: bad}
    ]

  return (
    <div>
      <Header title={'give feedback'} />
      <Button text={'good'} handleClick={ () => setGood(good + 1)} />
      <Button text={'neutral'} handleClick={ () => setNeutral(neutral + 1)} />
      <Button text={'bad'} handleClick={ () => setBad(bad + 1)} />
      <Header title={'statistics'} />
      <Statistics stats={stats} />
    </div>
  )
}

export default App