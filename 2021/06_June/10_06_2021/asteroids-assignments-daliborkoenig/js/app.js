class Player{
  constructor(){
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    this.posX = 0
    this.posY = window.innerHeight/2
    this.speed = 20
    const player = document.createElement("div");
    player.className = "player";
    document.body.appendChild(player)
  }
}
class Asteroid{
  constructor(){
    const asteroid = document.createElement("div");
    asteroid.className = "asteroid";
    this.posX = 0
    this.posY = 0
    this.speed = 50
    asteroid.style.right = `${this.posX}px`
    document.body.appendChild(asteroid)
    const create = () => {
      asteroid.style.top = `${Math.random()*(window.innerHeight-100)}px`
      asteroid.style.right = `${this.posX}px`
      document.body.appendChild(asteroid)
    }
    create()
    this.distance = window.innerWidth - 100
    const sleep = (time) => {
      return new Promise((resolve) => setTimeout(resolve, time))
    }
    const move = async () => {
      for (let i = 0; i < this.distance; i+=this.speed) {
        // if()
        await sleep(100)
        this.posX += this.speed
        asteroid.style.right = `${this.posX}px`
      }
      this.posX = 0
      asteroid.remove()
      create();
      move()
    }
    move()
  }
}

// new Asteroid()

function checkKeys(){
  window.onkeydown = (e) => {
    if(e.code == "KeyW" || e.code == "ArrowUp"){
      hero.up = true
    }
    else if(e.code == "KeyS" || e.code == "ArrowDown"){
      hero.down = true
    }
    else if(e.code == "KeyA" || e.code == "ArrowLeft"){
      hero.left = true
    }
    else if(e.code == "KeyD" || e.code == "ArrowRight"){
      hero.right = true
    }
    playerMove()
  }
  window.onkeyup = (e) => {
    if(e.code == "KeyW" || e.code == "ArrowUp"){
      hero.up = false
    }
    else if(e.code == "KeyS" || e.code == "ArrowDown"){
      hero.down = false
    }
    else if(e.code == "KeyA" || e.code == "ArrowLeft"){
      hero.left = false
    }
    else if(e.code == "KeyD" || e.code == "ArrowRight"){
      hero.right = false
    }
  }
  function playerMove(){
    if(hero.up){
      hero.posY -= hero.speed
      heroShip.style.top = `${hero.posY}px`
    }
    if(hero.down){
      hero.posY += hero.speed
      heroShip.style.top = `${hero.posY}px`
    }
    if(hero.left){
      hero.posX -= hero.speed
      heroShip.style.left = `${hero.posX}px`
    }
    if(hero.right){
      hero.posX += hero.speed
      heroShip.style.left = `${hero.posX}px`
    }
  }
}

function createEnemy(){
  new Asteroid
  const enemy = document.querySelector(".asteroid")
  enemy.style.top = `${Math.random()*(window.innerHeight-100)}px`
  // enemy.style.right = `${this.posX}px`
  // document.body.appendChild(asteroid)
}
let hero
let heroShip
function gameStart(){
  hero = new Player()
  heroShip = document.querySelector(".player")
  checkKeys()
  createEnemy()
  console.log(hero.posX);
}
gameStart()





