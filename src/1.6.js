import { useState } from 'react'
  

const Statistics = (props) => {
 
  const all = props.good + props.neutral + props.bad
  const average =(1*props.good+0*props.neutral+(-1)*props.bad)/all
  const positive =(props.good/all)*100

  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
      <p>all {all}</p>
      <p>average {average} </p>
      <p>positive {positive} % </p>
    </div>

  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

  const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    
    return (
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={() => setGood(good +1)} text="good" />
        <Button handleClick={() => setNeutral(neutral +1)} text="neutral" />
        <Button handleClick={() => setBad(bad +1)} text="bad" />
        <h1>Statistics</h1>
    
        <Statistics good = {good} neutral = {neutral} bad= {bad}/>
      </div>
    )
    }
    
  export default App