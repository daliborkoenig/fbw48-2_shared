import React, {useState} from 'react'

function EuroNumbers(props){
  const [reload, setReload] = useState(props.reload)
  console.log(reload);
  const luckyNumbers = () => {
    let numbers = []
    console.log(numbers);
    while(numbers.length < 5){
      let r = Math.ceil(Math.random()*50);
      if(numbers.indexOf(r) === -1) numbers.push(r);
    }
    console.log(numbers);
    while(numbers.length < 7){
      let r = Math.ceil(Math.random()*10);
      if(numbers.indexOf(r) === -1) numbers.push(r);
    }
    // numbers.push(Math.ceil(Math.random()*10))
    // numbers.push(Math.ceil(Math.random()*10))
    console.log(numbers);
    return numbers.map(number => <div className="number" key={Math.random()}>{number}</div>)
  }
  return <div className="euronumbers">{luckyNumbers()}</div>
}

function Eurojackpot() {
  const [showNumbers, setShowNumbers] = useState(false)
  const [reload, setReload] = useState(true)
  const handleClick = () => {
    if(!showNumbers){
      setShowNumbers(true)
    }
    else{
      setReload(!reload)
    }
  }
  return (
    <div className="LuckyNumbers">
      <h1>Eurojackpot</h1>
      <p>Generating lucky numbers</p>
      {showNumbers ? <EuroNumbers reload={reload}/> : ""}      
      
      <div className="buttons">
        <button onClick={()=>window.location.reload()}>Reset</button>
        <button onClick={handleClick}>Show me lucky numbers</button>
      </div>
    </div>
  )
}

export default Eurojackpot
