let doorimage1 =document.getElementById("door1");
let doorimage2 =document.getElementById("door2");
let doorimage3 =document.getElementById("door3");
let botdoorpath = "http://i65.tinypic.com/2n02b2f.jpg";
let beachdoorpath ="http://i66.tinypic.com/155hoxt.jpg";
let spacedoorpath ="http://i68.tinypic.com/powwg.jpg";
let opendoor1;
let opendoor2;
let opendoor3;
 let numClosedDoors =3;
let currentplaying= true;
let startbutton = document.getElementById("start");
let cdp ="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
const isBot = (door) => {
   if(door.src === botdoorpath) {
    return true;
  } else {
    return false;
}
}
const isclicked = (door)=>{
  if(door.src===cdp ){
    return false;
  }else{
    return true;
  }
}
const playdoor = (door) =>{
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameover('win');
  }else if (isBot(door)) {
  gameover('lose');
} 
  
}
const  randomchoreDoorGenerator = () =>{
let choreDoor=Math.floor(Math.random()*numClosedDoors);
  switch(choreDoor){
    case 0:
      opendoor1=botdoorpath;
      opendoor2=beachdoorpath;
      opendoor3=spacedoorpath;
      break;
      case 1:
      opendoor3=botdoorpath;
      opendoor1=beachdoorpath;
      opendoor2=spacedoorpath;
      break;
      case 2:
      opendoor2=botdoorpath;
      opendoor3=beachdoorpath;
      opendoor1=spacedoorpath;
      break;
  }
  
}

doorimage1.onclick = () => {
  if(currentplaying && !isclicked(doorimage1)){
  doorimage1.src =opendoor1;
playdoor(doorimage1);
  }
}
doorimage2.onclick = () => {
   if(currentplaying && !isclicked(doorimage2)){
  doorimage2.src = opendoor2;
playdoor(doorimage2);
   }
}
doorimage3.onclick = () => {
   if(currentplaying && !isclicked(doorimage3)){
  doorimage3.src = opendoor3;
playdoor(doorimage3);
   }
}
startbutton.onclick = () => {
  if(!currentplaying){
  startround();
  }
}
const startround = () =>{
  doorimage1.src=cdp;
    doorimage2.src=cdp;
    doorimage3.src=cdp;
  startbutton.innerHTML = "GOOD LUCK";
  numClosedDoors =3;
  currentplaying = true;
  randomchoreDoorGenerator();
}

const gameover =(status) => {
  if(status==='win'){
    startbutton.innerHTML="You win! \nClick me to Play Again? ";
  }
  else{
    startbutton.innerHTML="You lost! \nClick me to Play Again? ";
  }
  currentplaying = false;
} 
startround();