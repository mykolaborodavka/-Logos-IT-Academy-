function checkAge1(age){
var massege =(age>18?true:"Do You have permission");
    return massege;
}
function checkAge2(age){
    return (age>18||"Do You have permission?");
}
function min () {
 var min = Number.MAX_VALUE;
 for (var i = 0; i <arguments.length; i ++)
   if (arguments [i]< min) min = arguments [i];
 return min;
}
