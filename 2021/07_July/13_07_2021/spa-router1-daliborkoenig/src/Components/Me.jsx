import React, {useState, useEffect} from 'react'

function Me() {
  const[user, setUser] = useState({
    loaded: false,
    data: null,
    quote: null
  })
  useEffect(() => {
    const randomUser = async () => {
      let result1 = await fetch('https://randomuser.me/api/')
      let result2 = await fetch('https://api.kanye.rest/')
      let res1 = await result1.json()
      let res2 = await result2.json()
      let user = await res1.results[0]
      console.log(res2);
      setUser({loaded: true, data: {...user}, quote: res2.quote})

    }
    randomUser()
  }, [])
  console.log(user);
  const getYear = (data) => {
    return new Date(data).getFullYear();
  }

  return (
    <div className="Me">
      {user.loaded ? (
      <>  
        <img src={user.data.picture.large}></img>
        <div className="Me-text">
          <h1>{user.data.name.first} {user.data.name.last}</h1>
          <p>Hi, I am {user.data.name.first} and I was born in {getYear(user.data.dob.date)} in a town called {user.data.location.city} in {user.data.location.country}.</p>
          <p>{user.data.location.city} is located in the state of {user.data.location.state}.</p>
          <p>My favourite Kanye West quote is: "{user.quote}"</p>
        </div>
      </>) : <p>not loaded</p>}
    </div>  
  )
}

export default Me
