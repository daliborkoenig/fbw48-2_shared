function outer(){
  function inner(name){
    console.log("hello",name);
  }
  return inner
}

let func = outer()

func("dalibor")
const countUp = (count) => {
  // if (count>=100){
  //   return
  // }
  // countUp(count +1)
  while (count<100){
    count++
    console.log(count);
  }

}

countUp(0)

const countUp2 = (start,end) => {
  console.log(start);
  if(start<end){
    countUp2(start+1,end)
  }
}

countUp2(0,10)
