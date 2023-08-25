function checkmark(){
    var x = document.getElementById("mark").value;
    if ((x >=90) && ( x<=100)){
        alert(' S Grade with '+ x + '%.');
    }else if ((x >=80) && ( x<90)){
        alert( ' A grade with'+ x+'%');
    }else if ((x >=70) && ( x<80)){
        alert (' B grade with' + x+ '% ');
    }else if ((x >=60) && ( x<70)){
        alert (' C grade with'+ x+' % ');
    }else if ((x >=50) && ( x<60)){
        alert (' D grade with'+ x+' % ');
    }else if ((x >=40) && ( x<50)){
        alert (' E grade with'+ x+' % ');
    }else if( x<40){
        alert ('  Student Failed with'+ x+' % ');
    }
}