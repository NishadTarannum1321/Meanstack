
function test1()
{
    let num=10;
    return function test2(num1){
        console.log(num*num1)
    }
}
let testfn1=test1();
testfn1(20);