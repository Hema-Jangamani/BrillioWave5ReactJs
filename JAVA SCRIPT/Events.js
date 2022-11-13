const EventHandler = ()=>{
    alert('Hello World');
}

const Login = () =>{
    let username=document.getElementById('txt1').value;
    let age=document.getElementById('txt2').value;
    //alert('Hi '+username+' you are '+age+' years old.');
    alert(`Hi ${username}, you are ${age} years old.`);
}

const Sum=()=>{
    let x=parseInt(document.getElementById('firstnumber').value);
    let y=parseInt(document.getElementById('secondnumber').value);
    let z=x+y;
    document.getElementById('result').value=z;
}
let h=0;
let m=0;
let s=0;
const Start=()=>{

        
    
     ref=setInterval(() => {
         s++;
         if(s==60){
             m++;
             s=0;
         }
         if(m==60){
             h++;
             m=0;
         }
         if(h==24){
             h=0;
         }
         document.getElementById('hours').innerHTML=h;
    document.getElementById('minutes').innerHTML=m;
    document.getElementById('seconds').innerHTML=s;
     }, 100);
    
}


const Pause=()=>{
    clearInterval(ref);
}

const Reset =()=>
{
    clearInterval(ref);
    h=0;
    m=0;
    s=0;
    document.getElementById('hours').innerHTML=h;
    document.getElementById('minutes').innerHTML=m;
    document.getElementById('seconds').innerHTML=s;
}
setInterval(() => {
    var d=new Date();
    document.getElementById('hours').innerHTML=d.getHours();
    document.getElementById('minutes').innerHTML=d.getMinutes();
    document.getElementById('seconds').innerHTML=d.getSeconds();
}, 1000);

