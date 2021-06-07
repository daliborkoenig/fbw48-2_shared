function btnClick(){ // callback function 
    //console.log(" button clicked");
    alert("Button clicked")
}

let btn = document.getElementById("btn");

btn.addEventListener("click" , btnClick);