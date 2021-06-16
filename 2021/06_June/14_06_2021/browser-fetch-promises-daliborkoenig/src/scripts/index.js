// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
const modal = document.querySelector("#myModal")
const close = document.querySelector(".close")
close.onclick = ()=>{
  modal.style.display = "none"
}

const sixtySeconds = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve("success")
  }, 60000);
})
sixtySeconds.then(()=>{
  modal.style.display = "block"
})
// \/ All of your javascript should go here \/

