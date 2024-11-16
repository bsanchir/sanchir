var n ;
n = window.prompt("toot bair :") ;
var a ;
if ( n <= 36 ) {
    a = n / 4 ;
    document.write("1r orts", a ,"davgar") ;
}
else if ( n <= 72 ) {
    b= n - 36 ;
    a= b / 4 ;
    document.write("2r orts", a ,"davgar") ;
}
else if ( n <= 108 ) {
    b= n - 72 ;
    a= b / 4 ;
    document.write("3r orts", a ,"davgar") ;
}
else document.write("toot ail baihgui") ;
