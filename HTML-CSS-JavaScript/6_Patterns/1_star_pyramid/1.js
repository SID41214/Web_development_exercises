var i,j,k;
for(i=1; i<=5; i++) // for number of level to print ,here 5 ie,i<=5
{
        for(j=5; j>i; j--) //for the spaces in each level
        { document.write(" &nbsp;"); } 
      
        for(k=1; k<=((2*i)-1); k++) //for the round of no.of stars to be printed
        { document.write("*");}

    document.write("<br>");
}

/*let n = 5;
let string = "";

for (let i=1; i<=n; i++) //external loop
{
  for (let j = 1; j <= n - i; j++) // print spaces
        { string += " ";}
    
  for (let k = 0; k < 2 * i - 1; k++) //print star
         { string += "*"; }
   
  string += "\n";   
} 
console.log(string); 
*/
