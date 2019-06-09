//function test1() {
 //   var num = 10;
  //  return function test2(num1) {
   //     console.log(num * num1);
 //   };}
//var testfn1 = test1();
//testfn1(20);
//constdeclarations
//lamda declarations
var test=()=>10;
let num2=test();
console.log(num2);
var testdetails=(sample)=>sample;
{
    console.log(sample*3);
}(20);
let details1=testdetails(20);
console.log(details1);