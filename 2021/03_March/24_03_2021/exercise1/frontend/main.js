//   <div id="root"></div>
let rootElement = document.querySelector('#root')

rootElement.innerHTML = `javascript here`

const list = [`Call mum`, `Go to the gym`]

function render(){
  let str='';
  for(var i = 0; i < list.length; i++) {
    str += `<li>${list[i]}</li>`
  }
  return str;
}


rootElement.innerHTML = `
<ul style='list-style: none'>
${render()}
</ul>
`;