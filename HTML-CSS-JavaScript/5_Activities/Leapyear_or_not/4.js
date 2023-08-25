function checkleap(){
    var x = document.getElementById("year").value; //x= leapyear tp check imput value
    if(( x%4==0) && (x%100 != 0) || ( x % 400 == 0)){
        alert(x +" is a leap year")
    }
    else{
        alert(x + " is not a Leap Year");
    }
}