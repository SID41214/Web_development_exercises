/*var i,j,k;
for(i=0; i<=5; i++)
{
    for(j=5; j>i; j--)
    { document.write("&nbsp;&nbsp;");}

    for(k=1; k<=((i*2)-1); k++)
    {
        if(i==1 ||i==5 ||k==1 ||k==((i*2)-1))
        {
            document.write("*");
        }else
        document.write("&nbsp;&nbsp;");
    }
    document.write("<br>")

}
// for straight hollow pyramid
*/
var i,j,k;
for(i=5; i>=1; i--)
{
    for(j=5; j>i; j--)
    { document.write("&nbsp;&nbsp;");}

    for(k=1; k<=((i*2)-1); k++)
    {
        if(i==1 ||i==5 ||k==1 ||k==((i*2)-1))
        {
            document.write("*");
        }else
        document.write("&nbsp;&nbsp;");
    }
    document.write("<br>")

}