interface customer{
    readonly first_name:string;
    lastname:string;
}
let user:customer{
    first_name='ravi',
    lastname='reddy'
}
user.first_name='srikanth';
user.lastname='rao';
// const declaration for obj value shouldnot change but properties of the object can be changed
// readonly properties are specific for the object prop their values cannot be reassigned
const obj = {
    name:'ravi',
    age:25
}
obj.name = 'srk';
let sample1Arr:number[]=[1,2,3,4];
let ReadonlyArr: ReadonlyArray<number> = sample1Arr;
ReadonlyArr[0]=5;
ReadonlyArr.slice(1,3);
ReadonlyArr.push(19);
sample1Arr=ReadonlyArr;


class engine{


    constructor(val:string){

        //  this.enginetype=val;

    }


    enginetype:string;

    start(){

        console.log("start the engine");

    }
}
let car=new engine('suz');
car.start();
class transmission extends engine{
    clutch='testclutch';
    constructor(){
        super('new engine');
    }
}

class petrolmachine extends transmission{
    color='grey';
    }
let petrlmach= new petrolmachine();
petrlmach.start();
petrlmach.enginetype;
interface partsofMobile{
ram:string;
processor:string;
}
class phone implements partsofMobile{
    ram:'4gb';
    processor:'intel core';
    private battery:string;
    constructor(private model){

    }
    public set setBatterval(v:string)
{
    this.battery=v;
}
public get getBatteryval(){
    return this.battery;

}
}
let phne=new phone('samsung');
phne.setBatterval='3000mah';
phne.getBatteryval;

abstract class cellphone{

}
class nokia extends cellphone{

}
let nokaphne=new nokia();






















































