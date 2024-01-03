let Hours=document.getElementById("Hours");
let Minutes=document.getElementById("Minutes");
let Seconds=document.getElementById("Seconds");

setInterval(()=>{
let currentTime=new Date();

Hours.innerHTML =currentTime.getHours();
Minutes.innerHTML=currentTime.getMinutes();
Seconds.innerHTML=currentTime.getSeconds();
},1000)