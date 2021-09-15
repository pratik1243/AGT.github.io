

function pop1(){
 let pops1=document.getElementsByClassName('pops1')[0];
if(pops1.style.display == "none"){
pops1.style.display="block";
}
else{
pops1.style.display="none";
}

}

function pop2(){
    let pops2=document.getElementsByClassName('pops2')[0]; 
   if(pops2.style.display == "none"){
   pops2.style.display="block";
   }
   else{
   pops2.style.display="none";
   }

   }
   
function pop3(){
    let pops3=document.getElementsByClassName('pops3')[0];
   if(pops3.style.display == "none"){
   pops3.style.display="block";
   }
   else{
   pops3.style.display="none";
   }

   }

   function show(){
 let accountform=document.getElementById('account-form');
 let cards=document.getElementById('cards');
 let navbar=document.getElementById('navbar');
 let navbar2=document.getElementsByClassName('navbar2')[0];
let myhead=document.getElementsByClassName('my-head')[0];
  let body=document.getElementById('over');
  accountform.style.display="block";
  body.style.overflowY="hidden";
cards.style.filter="brightness(20%)";
navbar.style.filter="brightness(20%)";
navbar2.style.filter="brightness(20%)";
myhead.style.filter="brightness(20%)"; 
let Width=document.querySelector('.width');
Width.style.filter="brightness(20%)";


   }


function hide(){
    let accountform=document.getElementById('account-form');
 let navbar=document.getElementById('navbar');
 let cards=document.getElementById('cards');
 let body=document.getElementById('over');
 let navbar2=document.getElementsByClassName('navbar2')[0];
 let myhead=document.getElementsByClassName('my-head')[0];
accountform.style.display="none";
navbar.style.filter="brightness(100%)";
body.style.overflowY="visible";
cards.style.filter="brightness(100%)";
navbar2.style.filter="brightness(100%)";
myhead.style.filter="brightness(100%)";   
let Width=document.querySelector('.width');
Width.style.filter="brightness(100%)";

    }

    function signin(){
let flexing=document.getElementById('flexing');
let lastinp=document.getElementById('last-input');
let h1=document.querySelector('.part1 h1');
let p2=document.querySelector('.part2 .p2');
let a=document.querySelector('.part2 a');
let change=document.querySelector('.part2 .change');
let createbtn=document.querySelector('.flexing2 .create-btn');
h1.innerHTML="welcome back";
createbtn.innerHTML="sign in";
if(flexing.style.visibility == "visible"){
flexing.style.visibility="hidden";
lastinp.style.display="none";
h1.innerHTML="welcome back";
createbtn.innerHTML="sign in";
p2.style.display="none";
a.innerHTML="create account";
change.innerHTML="don't";
}
else{
    flexing.style.visibility="visible";
    lastinp.style.display="block"; 
    h1.innerHTML="create account";
createbtn.innerHTML="create account";
p2.style.display="block";
a.innerHTML="sign in";
change.innerHTML="already";
}

    }


let seabtn=document.getElementById("sea-btn");
seabtn.addEventListener('click',function(){
let popinput=document.getElementById('pop-input');

if(popinput.style.display == "none"){
    popinput.style.display="block";   
}else{
    popinput.style.display="none";  
}

});
