let startNr = 0;
const endNr = 100;
document.querySelector('h1').innerHTML=startNr;
// count up function using recursion 

const countUp = (count)=> {
    document.querySelector('h1').innerHTML = count;
    if(count < endNr){
        setTimeout( ()=> countUp(count +1),20 );
    }
}
window.onload = function WindowLoad(event) {    

 countUp(startNr);

}