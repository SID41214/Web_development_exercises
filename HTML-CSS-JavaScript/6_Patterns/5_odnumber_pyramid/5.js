var i,j,k;

for(i=1;i<=5;i++)
{
    for(j=5;j>i;j--)
    {
        document.write(" &nbsp;");
    }
    for(k=1; k<=((2*i)-1); k++)
    {
        document.write(k);
      
       
    }
    document.write("<br>");
}