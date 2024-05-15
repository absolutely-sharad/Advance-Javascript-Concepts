// when a function performs asyncronous task and recieving callback function and then we want to convert it into a promise then we use promisify.
// we use it when we want to achieve promise concept with more clear code 
const util= require('util');
function getdata(callback){
    setTimeout(()=>{
        let a=5;
        if(a==6){
            callback(null,"successful")
        }else{
            callback(new Error("failed"))
        }
    },2000)
}
const test=util.promisify(getdata);
test().then((msg)=>console.log(msg)).catch((err)=>console.log(err))