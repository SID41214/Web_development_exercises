const arr=[1,4,7,3,6];
let largest=arr.reduce(function(a,b) { return (a>b)?a:b;});
document.getElementById("p1").innerHTML="Largest element = "+largest;