//browser objects used to interact with browser
/*
document
window
screen 
location
history
navigator
*/

//console.log(document.all);
document.write('Welcome');
var ele=document.getElementById('heading1').innerHTML;
console.log(ele);

var txt=document.getElementById('text1');
console.log(txt.value);

document.getElementById('heading1').style.color='red';

//console.log(window);
//alert('Welcome to my page');
// var res=confirm('Do you want to close the window?');
// if(res){
//     window.close();
// }

// setTimeout(()=>{
//    alert('Game Over');
// },5000);
// let count=0;
// let ref=setInterval(() => {
//     document.getElementById('counter').innerHTML=count;
//     count++;
//     if(count>10)
//     {
//         clearInterval(ref);
//     }
// }, 1000);

console.log(screen.width);
console.log(screen.height);

console.log(location.href);
console.log(location.protocol);
console.log(location.host);

console.log(navigator.platform);
console.log(navigator.language);
console.log(navigator.appVersion);