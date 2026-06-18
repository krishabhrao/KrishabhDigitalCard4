function shareCard(){

if(navigator.share){

navigator.share({
title:"Krishabh Yadav",
text:"Software Developer | Radiant Computers",
url:window.location.href
});

}
else{

navigator.clipboard.writeText(window.location.href);

alert("Link copied!");

}

}

particlesJS("particles-js", {

particles:{

number:{
value:80
},

color:{
value:"#3b82f6"
},

shape:{
type:"circle"
},

opacity:{
value:0.5
},

size:{
value:3
},

line_linked:{
enable:true,
distance:150,
color:"#60a5fa",
opacity:0.3
},

move:{
enable:true,
speed:2
}

}

});
