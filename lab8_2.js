var n ;
n = window.prompt("toot bair :") ;
var a ;
if ( n <= 36 ) {
    a = n / 4 ;
    document.writeln("1r orts", a ,"davgar") ;
}
else if ( n <= 72 ) {
    b= n - 36 ;
    a= b / 4 ;
    document.writeln("2r orts", a ,"davgar") ;
}
else if ( n <= 108 ) {
    b= n - 72 ;
    a= b / 4 ;
    document.writeln("3r orts", a ,"davgar") ;
}
else document.writeln("toot ail baihgui") ;
