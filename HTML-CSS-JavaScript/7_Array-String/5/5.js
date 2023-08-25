function check(){
    var a =document.getElementById("a").value;
    var arrayvalue = a.split('');
    var reversearrayvalue = arrayvalue.reverse();
    var reversestring = reversearrayvalue.join('');
    if(a == reversestring){
        document.getElementById("show").innerHTML="it is a palindrome";
    }
    else{
        document.getElementById("show").innerHTML =" it is not a Palindrome"
    }
}