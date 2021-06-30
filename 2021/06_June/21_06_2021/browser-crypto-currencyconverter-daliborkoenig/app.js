const formElem = document.querySelector('form');
const userInp = document.querySelectorAll("input")
const currOne = document.querySelector("#currOne")
const currTwo = document.querySelector("#currTwo")

async function getcurr(){
  const res = await fetch("https://api.cryptonator.com/api/currencies")
  const result = await res.json()
  // console.log(result.rows);
  result.rows.forEach(async (item) => {
    // console.log(item);
    const option = document.createElement("option")
    option.value = `${item.code}`
    option.innerText = `${item.code}`
    currOne.appendChild(option)
  });
  result.rows.forEach(async (item) => {
    // console.log(item);
    const option = document.createElement("option")
    option.value = `${item.code}`
    option.innerText = `${item.code}`
    currTwo.appendChild(option)
  });
}

getcurr()

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
  console.log(choice);
  async function fetchData(){
    const res = await fetch(`https://api.cryptonator.com/api/ticker/${choice[0]}-${choice[1]}`);
    // const res = await fetch(`https://api.cryptonator.com/api/ticker/ADAUP-ACT`);
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

