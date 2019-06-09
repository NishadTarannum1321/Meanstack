var num=10;
console.log(num);
function details(name){
    return function test(lang){
        console.log(name+lang);
    }
}
var updatelang=details('ravi');
updatelang('telugu');
function iterator(num1){
    setTimeout(function () {
        console.log(num1);
    }, 1000);
    }
    for (var i = 0; i < 10; i = i + 1) {
      iterator(i);
    }
    for(let j=0;j<10;j++)
    {
        var testfn=function(){
            console.log(j);
        }
        setTimeout(testfn,1000);
    }