    
// import { Engine_1, PetrolEngine_1 } from './namespace';
import { automobile } from './namespace';
let car_1=new automobile.engine_1();

//generics function


function text(num:any):any{
    console.log(typeof num);
    return [num];
}
function text_1<T>(num:T):T{
    console.log(typeof num);
    return num;
}
text_1('ravi');
text_1([]);