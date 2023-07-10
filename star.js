var button1=document.getElementById("btn1");
var button2=document.getElementById("btn2");
button1.addEventListener("mouseenter",changebgcolor);
button1.addEventListener("mouseleave",oldbgcolor);
button2.addEventListener("mouseenter",changebgcolor1);
button2.addEventListener("mouseleave",oldbgcolor1);

function changebgcolor(){
    button1.style.backgroundColor="rgb(151, 144, 144)";
}
function oldbgcolor(){
    button1.style.backgroundColor="white";
}
function changebgcolor1(){
    button2.style.backgroundColor="rgb(46, 46, 46)";
}
function oldbgcolor1(){
    button2.style.backgroundColor="black";
}

