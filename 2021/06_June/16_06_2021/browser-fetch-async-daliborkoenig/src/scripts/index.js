const modal = document.getElementById("myModal");
let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal)
    }, (1000));
});
// promiseOfModal.then(function(val) {
//     console.log("User has been on the page for 60 seconds");
//     val.style.display = "block";
// })
modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})
async function versionTwo(){
  try{
    const val = await promiseOfModal
    val.style.display = "block";
  }
  finally {
    console.log("User has been on the page for 60 seconds");
  }

}
versionTwo()

const button = document.querySelector("#continue")
const animationEnd = async () => {
  await button.addEventListener("animationend", ()=>{
    console.log("first fire");
    button.style.backgroundColor = "red"
    setTimeout(() => {
      alert("Continue to subscribe")
    }, 200);
  })
}
animationEnd()



