//console.log('Hello from Node');

// const tutorial = require('./tutorial');
// console.log(tutorial);
// console.log(tutorial(1,1));

// const tutorial = require('./tutorial');
// console.log(tutorial.sum(1,1));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();
// // eventEmitter.on('tutorial',()=>{
// //     console.log('tutorial even has occured');
// // });
// // eventEmitter.emit('tutorial');

// eventEmitter.on('tutorial',(num1, num2)=>{
//     console.log(num1+num2);
// });
// eventEmitter.emit('tutorial',1,2);

// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name = name;
//     }
//     get name(){
//         return this._name;
//     }
// }

// let pedro = new Person('Pedro');
// pedro.on('name', ()=>{
//     console.log('name is ' + pedro.name);
// });

// let eshan = new Person('eshan');
// eshan.on('name', ()=>{
//     console.log('name is ' + eshan.name);
// });

// pedro.emit('name');
// eshan.emit('name');

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, 
                          output : process.stdout});
let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);
let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}? \n`,
(userinput)=> {
    console.log(userinput);
    if(userinput.trim() == answer){
        rl.close();
    }else{
        rl.setPrompt('Incorrect response, please try again \n');
        rl.prompt();
        rl.on('line', (userinput)=>{
            if(userinput.trim() == answer){
                rl.close();
            }else{
                rl.setPrompt(`Your answer ${userinput} is wrong, try again \n`);
                rl.prompt();
            }
        })
    }
});

rl.on('close', () => {
    console.log('Correct!!');
});