function check() {
    var value = document.getElementById("data").value;
  if (value >0) {
    res =`${value} is a Positive Number`
    }
    else if(value < 0) {
        res=`${value} is a Negative Number` 

    }
    else if(value == 0){
        res=`It is Zero`
    }else
    { res ="It is not a number..Please type number to check"}
    document.getElementById("res").innerText =res ;
}