var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;

document.getElementsByClassName("img1")[0].src='./images/dice'+random1+'.png';
document.getElementsByClassName("img2")[0].src='./images/dice'+random2+'.png';

if(random1>random2)
{
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(random2>random1)
{
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML="Match Draw";
}