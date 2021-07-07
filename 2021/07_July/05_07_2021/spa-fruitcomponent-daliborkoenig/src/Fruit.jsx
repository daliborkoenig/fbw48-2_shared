import React, {useState} from 'react'

function Fruit() {
  const [fruit, setFruit] = useState([{fruit: "Apple", show: true, index: 0}, {fruit: "Mango", show: true, index: 0},{fruit: "Banana", show: true, index: 0},{fruit: "Lemon", show: true, index: 0}])
  const [colors, setColors] = useState(["red", "green", "yellow", "purple", "orange"])

  const handleChange = (e) => {
    console.log(e.target.className);
    setFruit(fruit.map(item=>{
      if(item.fruit === e.target.className){
        return {...item, index: Math.floor(Math.random()*4)}
      }
      else{
        return item
      }
    }))
  }
  const handleDelete = (e) => {
    console.log(e.target.parentElement);
    setFruit(fruit.map(item=>{
      if(item.fruit === e.target.className){
        return {...item, show: !item.show}
      }
      else{
        return item
      }
    }))
  }
  const deleteAll = () => {
    setFruit(fruit.map(item=>{return {...item, show: false}}))
  }

  return (
    <div className="Fruit">
      {fruit.map(item => {
        return item.show ? (<div>
            {item.fruit}, color = {colors[item.index]}
            <button className={item.fruit} onClick={handleChange}>Change Color</button>
            <button className={item.fruit} onClick={handleDelete}>Delete Me</button>
          </div>) : null
      })}
      <button onClick={deleteAll}>delete all</button>
    </div>
  )
}

export default Fruit
