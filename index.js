var rand1 = Math.floor(Math.random()*6)+1;      //creates random number
var img1Src = "images/dice" + rand1 + ".png";   //concatinate random num and src of img
var rand2 = Math.floor(Math.random()*6)+1;      //same for img 2
var img2Src = "images/dice" + rand2 + ".png";   //same for img 2

var img1 = document.querySelectorAll("img")[0]; //select img 1
img1.setAttribute('src', img1Src);              //set src for img1

var img2 = document.querySelectorAll("img")[1]; //same for img2
img2.setAttribute('src', img2Src);              //same for img2


if (rand1 > rand2){
    document.querySelector("h1").innerHTML = "Player 1 won"
}
else if (rand2 > rand1){
    document.querySelector("h1").innerHTML = "Player 1 won"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"

}


console.log(img1Src);
console.log(img2Src);
