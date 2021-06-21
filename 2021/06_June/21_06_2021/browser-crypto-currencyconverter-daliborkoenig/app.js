const formElem = document.querySelector('form');
const userInp = document.querySelectorAll("input")

formElem.addEventListener('submit', (e) => {
  e.preventDefault();
  new FormData(formElem);
});

formElem.addEventListener('formdata', (e) => {
  let data = e.formData;
  let choice = []
  for (let item of data.values()) {
    choice.push(item.toLowerCase())
  }
  async function fetchData(){
    const res = await fetch(`https://api.cryptonator.com/api/ticker/${choice[0]}-${choice[1]}`);
    const result = await res.json();
    console.log(result);
    console.log(typeof result.ticker.price);
    userInp[1].value = `${(userInp[0].value*Number(result.ticker.price).toFixed(2))}`
  }
  if(choice.length == 0){}
  else{
    fetchData()
  }

});

