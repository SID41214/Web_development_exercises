
function check(a,b,c){
    if (a>=b && a >=c ) {
        return a;
}else if(b>=a && b>=c){
    return b;} 
    else{ return c}
}
var a =prompt("Enter a:");
var b =prompt("Enter b:");
var c =prompt("Enter c:");
var x =check(a,b,c);

document.write(`The largest number is ${x}`) ;
