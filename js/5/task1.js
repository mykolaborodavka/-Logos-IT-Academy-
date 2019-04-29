var user={
    name : 'ПИЛИП',
    surname : 'ШЕВЧЕНКО'
}
user.name='СЕРГІЙ';
delete user.name;

//var EmployeeSalaries =[250,300,800,2000,150,980]

var EmployeeSalaries =[]

function showMessage(EmployeeSalaries) {
 if (EmployeeSalaries.length==0){
   return 0}
   var i=0,sum=0;
 for(i;i<EmployeeSalaries.length;i++){
  sum+=EmployeeSalaries[i]  }

return sum}

alert(showMessage(EmployeeSalaries));

