function test(num1:number,num2:number){
    console.log(num1+num2);
}
test(10,20);
let firstname:string;
firstname='';
let data:[string|number];
data=['krishna'];
data.push('srk');

let friends:string[];
friends=['krish','nish','sujju'];
let friendlist:Array<string|number>
friendlist=['noha','nijju',45];
interface obj{
name:string;
age:number;
eduction?:string;
[index:string]:string|number;
}
let studentdata:obj;
studentdata={
    name:'noha',
    age:3,
    education:''
}
let studentdata1:obj={
    name:'nisshu',
    age:27
}
studentdata.address='hyderabad';
studentdata1.qualification='btech';
interface obj1{
    fname:string;
    vehicle?:string;

}
function test_1(name:{fname:string;}){
    console.log(name);
}
//test_1('ravi'); wrong declaration
test_1( {fname:'ravi'});
function test_2(name1:obj1):Array<any>{
    console.log(name1);
    return[10,20];
}
test_2({fname:'krishna',vehicle:''});
let testobj:obj1={
    fname:'krishna',
    vehicle:'yamaha'
}