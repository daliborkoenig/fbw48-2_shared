import React, {useState} from 'react'

function SixNumbers(props){
  const [reload, setReload] = useState(props.reload)
  console.log(reload);
  const luckyNumbers = () => {
    let numbers = []
    while(numbers.length < 6){
      let r = Math.ceil(Math.random()*49);
      if(numbers.indexOf(r) === -1) numbers.push(r);
    } 
    numbers.push(Math.ceil(Math.random()*10))
    return numbers.map(number => <div className="number" key={Math.random()}>{number}</div>)
  }
  return <div className="sixnumbers">{luckyNumbers()}</div>
}

function SixOutOf49() {
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
      <h1>Lotto 6 / 49</h1>
      <p>Generating lucky numbers</p>
      {showNumbers ? <SixNumbers reload={reload}/> : ""}      
      
      <div className="buttons">
        <button onClick={()=>window.location.reload()}>Reset</button>
        <button onClick={handleClick}>Show me lucky numbers</button>
      </div>
    </div>
  )
}

export default SixOutOf49
