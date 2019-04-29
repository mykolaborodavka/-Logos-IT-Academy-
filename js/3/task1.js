//MIN
//task1
 alert('task1');
var n = prompt('Enter number')
if (n%2==0){
    alert("парное");
}else{
    alert("не парное");
}


//task2

 alert('task2');
var n1 = prompt('Enter number1'),n2 = prompt('Enter number2');
var n1r  =Math.abs(10-n1),n2r=Math.abs(10-n2);
if (n1r<n2r){
    alert(n1+" найближче до 10");
}else{
    alert(n2 +" найближче до 10");
}


//task3
 alert('task3');
var fir3 = 1000, str3=fir3+' ';
while (fir3<10000){
  fir3++;
  str3+=" ";
  str3+=fir3;

}
console.log(str3);


//task4
 alert('task4');
var fir4=1, i=0,str4=fir4+" ";
for(i;i<55;i++){
 str4= str4+" "+fir4;
 fir4+=2;
}
console.log(str4);


// MAX
//task5


 alert('task5');
var a= prompt('Enter a'),b=prompt('Enter b'),c=prompt('Enter c');
var D=b*b-4*a*c,x1=0;
if (D>0){
    x1=(-b+Math.sqrt(D))/(2*a);
    alert('x1='+x1);
    x2=(-b-Math.sqrt(D))/(2*a);
    alert('x2='+x2);
}
if (D==0){
    x1=x2=-b/2*a;
    alert('x1=x2'+x1);
}
if(D<0){
    alert('Нету коней так как Дескриминант меньше нуля');
}

//task6
 alert('task6');
var fir6 =90,str6=fir6+" ";
while(fir6>0){
    fir6-=5;
    str6=str6+" "+fir6;
}
alert(str6);

//task7

 alert('task7');
var fir7=2; str7=fir7+" ",i=0;
for (i;i<20;i++){
    fir7*=2;
    str7=str7+' '+fir7;
}
alert(str7);
