var n ;
n = window.prompt("graas utga oruul:") ;
n = parseInt(n) ;
var sum=0 ;
while ( n!=0)
    {
        sum = sum + (n % 10) ;
        n= Math.floor(n/10) ;
    } 
var str ;
var rev ;
str = sum.toString();
for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  } 
if ( str == rev) {
    document.write("sum is palindrome")
}
else { 
    document.write("sum is not palindrome")
}
document.write("\nresult: " + sum) ;