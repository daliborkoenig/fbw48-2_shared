import React from 'react'

function Hobbies() {
  const hobbies = ["Nothing.","Oranges.","Drinking.","Hacking.","LARPing.","FarmVille.","Painting my toenails.","Talking.","Samurai sword collecting.","Witchcraft.","Escapology.","Dinosaurs.","Palm reading.","Time travel.","Snake skin collecting.","Collecting firearms.","Arguing with people online.","Streaking.","Work.","Stalking celebrities.","Taking surveys.","Food-eating competitions.","Ferret racing.","Being awesome.","Bull fighting.","Handcuff-collecting.","Sleeping.","I don’t have any hobbies.","I have 14 cats.","Harry Potter.","Cosplay.","Worldbuilding.","Cooking dogs.","Donating blood.","Rock balancing.","Owls.","Planking.","Eating sweets.","Netflix n’ chill.","Crowd watching.","Scrabble.","Frog dissections.","Playing dead.","Crash dieting.","Eating.","Tying knots.","Space.","I am the batman."]
  const random3 = () => {
    let one = hobbies[Math.floor(Math.random()*(hobbies.length-1))]
    let two = hobbies[Math.floor(Math.random()*(hobbies.length-1))]
    let three = hobbies[Math.floor(Math.random()*(hobbies.length-1))]
    // console.log(one, two, three) 
    return (
      <>
        <div className="hobby" key={one}>
          <h1>{one}</h1>
          <div className="hobby-images">
            <img src={`https://source.unsplash.com/199x200/?${one}`} alt={one}/>
            <img src={`https://source.unsplash.com/200x200/?${one}`} alt={one}/>
            <img src={`https://source.unsplash.com/201x200/?${one}`} alt={one}/>
            <img src={`https://source.unsplash.com/202x200/?${one}`} alt={one}/>
          </div>
        </div>
        <div className="hobby" key={two}>
          <h1>{two}</h1>
          <div className="hobby-images">
            <img src={`https://source.unsplash.com/199x200/?${two}`} alt={two}/>
            <img src={`https://source.unsplash.com/200x200/?${two}`} alt={two}/>
            <img src={`https://source.unsplash.com/201x200/?${two}`} alt={two}/>
            <img src={`https://source.unsplash.com/202x200/?${two}`} alt={two}/>
          </div>
        </div>
        <div className="hobby" key={three}>
          <h1>{three}</h1>
          <div className="hobby-images">
            <img src={`https://source.unsplash.com/199x200/?${three}`} alt={three}/>
            <img src={`https://source.unsplash.com/200x200/?${three}`} alt={three}/>
            <img src={`https://source.unsplash.com/201x200/?${three}`} alt={three}/>
            <img src={`https://source.unsplash.com/202x200/?${three}`} alt={three}/>
          </div>
        </div>
        {/* <div key={two}></div>
        <div key={three}></div> */}
      </>
    )
  }
  return (
    <div className="Hobbies">
      {random3()}
    </div>
  )
}

export default Hobbies
