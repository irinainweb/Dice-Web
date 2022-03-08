

document.querySelector(".play").addEventListener("click", play);




function play(){
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceimage1="dice"+randomnumber1+".png";
var randomimagesource1="images/"+randomdiceimage1;
var image1=document.querySelector(".image1").setAttribute("src",randomimagesource1);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimagesource2="images/dice"+randomnumber2+".png";
var image2=document.querySelector(".image2").setAttribute("src",randomimagesource2);

if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="✌Player1 Wins";
}
else if (randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML="Player2 Wins ✌";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
}
