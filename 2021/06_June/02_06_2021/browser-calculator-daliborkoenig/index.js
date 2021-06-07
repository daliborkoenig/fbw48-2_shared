const body = document.querySelector("body")
body.style.fontFamily = "arial"
body.style.width = "100vw"
body.style.height = "100vh"
body.style.padding = "0"
body.style.margin = "0"

const title = document.createElement("h1")
title.textContent = "CALCULATION X"
title.style.backgroundColor = "yellow"
title.style.height = "13%"
title.style.margin = "0"
title.style.textAlign = "center"
title.style.paddingTop = "5%"
title.style.fontWeight = "normal"
title.style.width = "80%"
title.style.marginLeft = "10%"

const titleBas = document.createElement("h2")
titleBas.textContent = "Basic Arithmetic"
titleBas.style.fontWeight = "normal"
titleBas.style.marginLeft = "10%"

const basicTable = document.createElement("div")
basicTable.id = "basicTable"
basicTable.innerHTML = `
<input type="number" oninput="calculate(this)" value=0>+
<input type="number" oninput="calculate(this)" value=0>=
<input type="number" disabled value=0>
<input type="number" oninput="calculate(this)" value=0>-
<input type="number" oninput="calculate(this)" value=0>=
<input type="number" disabled value=0>
<input type="number" oninput="calculate(this)" value=0>*
<input type="number" oninput="calculate(this)" value=0>=
<input type="number" disabled value=0>
<input type="number" oninput="calculate(this)" value=0>/
<input type="number" oninput="calculate(this)" value=0>=
<input type="number" disabled value=0>
`
basicTable.style.width = "80%"
basicTable.style.display = "grid"
basicTable.style.gridTemplateColumns = "1fr 0.01fr 1fr 0.01fr 1fr"
basicTable.style.gridGap = "20px"
basicTable.style.marginLeft = "10%"

const titleSpec = document.createElement("h2")
titleSpec.textContent = "Special Operations"
titleSpec.style.fontWeight = "normal"
titleSpec.style.marginLeft = "10%"

const titleMod = document.createElement("h3")
titleMod.textContent = "Modulo"
titleMod.style.fontWeight = "normal"
titleMod.style.marginLeft = "10%"

const specialTable = document.createElement("div")
specialTable.id = "specialTable"
specialTable.innerHTML = `
<input type="number" oninput="calculate(this)" value=0>%
<input type="number" oninput="calculate(this)" value=0>=
<input type="number" disabled value=0>
`
specialTable.style.width = "80%"
specialTable.style.display = "grid"
specialTable.style.gridTemplateColumns = "1fr 0.01fr 1fr 0.01fr 1fr"
specialTable.style.gridGap = "20px"
specialTable.style.marginLeft = "10%"

body.append(title, titleBas, basicTable, titleSpec, titleMod, specialTable)

const inputs = document.querySelectorAll("input")
const basicTableChildren = document.querySelector("#basicTable").childNodes
const specialTableChildren = document.querySelector("#specialTable").childNodes

function calculate(obj){
  if(obj.nextSibling.textContent.indexOf("+") > -1 || obj.previousSibling.textContent.indexOf("+") > -1){
    basicTableChildren[5].value = Number(basicTableChildren[1].value) + Number(basicTableChildren[3].value)
  }
  if(obj.nextSibling.textContent.indexOf("-") > -1 || obj.previousSibling.textContent.indexOf("-") > -1){
    basicTableChildren[11].value = Number(basicTableChildren[7].value) - Number(basicTableChildren[9].value)
  }
  if(obj.nextSibling.textContent.indexOf("*") > -1 || obj.previousSibling.textContent.indexOf("*") > -1){
    basicTableChildren[17].value = Number(basicTableChildren[13].value) * Number(basicTableChildren[15].value)
  }
  if(obj.nextSibling.textContent.indexOf("/") > -1 || obj.previousSibling.textContent.indexOf("/") > -1){
    if(Number(basicTableChildren[21].value) == "0"){
      basicTableChildren[23].value = 0
    }
    else{
      basicTableChildren[23].value = Number(basicTableChildren[19].value) / Number(basicTableChildren[21].value)
    }

  }
  if(obj.nextSibling.textContent.indexOf("%") > -1 || obj.previousSibling.textContent.indexOf("%") > -1){
    console.log(obj.value);
    if(Number(specialTableChildren[3].value) == "0"){
      specialTableChildren[5].value = 0
    }
    else{
      specialTableChildren[5].value = Number(specialTableChildren[1].value) % Number(specialTableChildren[3].value)
    }
  }
}
