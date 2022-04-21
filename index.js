/*document.querySelector("button").addEventListener("click",function (){
 alert("i got clicked");//anonymous function

});*/
/*function handleCLick(){
  alert("i got clicked");

}*/
/*document.querySelector(".set").addEventListener("click",function (){
 alert("i got clicked");//adding event listner to every button

});*/
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function (){
 var b=this.innerHTML;
 makesound(b);
 /*switch(b)
 {
   case "w" :
   var a=new Audio("sounds/tom-1.mp3");
   a.play();
   break;
   case "a" :
   var a=new Audio("sounds/tom-2.mp3");
   a.play();
   break;
   case "s" :
   var a=new Audio("sounds/tom-3.mp3");
   a.play();
   break;
   case "d" :
   var a=new Audio("sounds/tom-4.mp3");
   a.play();
   break;
   case "j" :
   var a=new Audio("sounds/crash.mp3");
   a.play();
   break;
   case "k" :
   var a=new Audio("sounds/kick-bass.mp3");
   a.play();
   break;
   case "l" :
   var a=new Audio("sounds/snare.mp3");
   a.play();
   break;
 }*/
});
}//another way of adding event listner to every button
//var sound=new Audio("sounds/tom-1.mp3");
//sound.play();
document.addEventListener("keydown",function(event){
  makesound(event.key);
});
function makesound(key){
  switch(key)
  {
    case "w" :
    var a=new Audio("sounds/tom-1.mp3");
    a.play();
    break;
    case "a" :
    var a=new Audio("sounds/tom-2.mp3");
    a.play();
    break;
    case "s" :
    var a=new Audio("sounds/tom-3.mp3");
    a.play();
    break;
    case "d" :
    var a=new Audio("sounds/tom-4.mp3");
    a.play();
    break;
    case "j" :
    var a=new Audio("sounds/crash.mp3");
    a.play();
    break;
    case "k" :
    var a=new Audio("sounds/kick-bass.mp3");
    a.play();
    break;
    case "l" :
    var a=new Audio("sounds/snare.mp3");
    a.play();
    break;
  }
}
