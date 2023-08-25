const arr=[1,2,1,3,1];
arr.sort();
document.getElementById("p1").innerHTML= "First by sorting: " +arr;
const arr1=arr.slice(3);
document.getElementById("p2").innerHTML="Output: "+arr1;