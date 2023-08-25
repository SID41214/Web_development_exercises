let str="hello";
let out=str.split("").reduce((acc,char)=> char+acc,"");
document.getElementById("p1").innerHTML= " by using split&reduce method::-  " + out;

