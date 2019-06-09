var num = 10;
console.log(num);
function details(name) {
    return function test(lang) {
        console.log(name + lang);
    };
}
var updatelang = details('ravi');
updatelang('telugu');

