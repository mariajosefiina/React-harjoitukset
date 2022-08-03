import { useState } from 'react'
  

const StatisticsLine = (props) => {

  return(
<>
 <p>{props.text} {props.value} </p> 

 </>
  )
}

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
<StatisticsLine text="good" value ={props.good} />
<StatisticsLine text="neutral" value ={props.neutral} />
<StatisticsLine text="bad" value ={props.bad} />
<StatisticsLine text="all" value = {all} />
<StatisticsLine text="average" value = {average} />
<StatisticsLine text="positive" value = {positive} />
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