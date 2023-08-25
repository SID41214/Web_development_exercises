/*  // 65 onwards A  //  97 onwards a (A +32 = a)
UTF-16 :2^16=65536 ie, 0 to 65535
for(i=0; i<=65535;i++)
{
    document.write(i+")"+String.fromCharCode(i)+"<br>");
}

*/
var i,j;
var x;// alphabet
for(i=1; i<=5; i++)
{
    x=65;
   for(j=1;j<=i;j++)
    { document.write(String.fromCharCode(x));
      x++;
    } 

document.write("<br>");
}