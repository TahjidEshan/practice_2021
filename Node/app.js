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

// const readline = require('readline');
// const rl = readline.createInterface({input : process.stdin, 
//                           output : process.stdout});
// let num1 = Math.floor((Math.random()*10)+1);
// let num2 = Math.floor((Math.random()*10)+1);
// let answer = num1 + num2;

// rl.question(`What is ${num1} + ${num2}? \n`,
// (userinput)=> {
//     console.log(userinput);
//     if(userinput.trim() == answer){
//         rl.close();
//     }else{
//         rl.setPrompt('Incorrect response, please try again \n');
//         rl.prompt();
//         rl.on('line', (userinput)=>{
//             if(userinput.trim() == answer){
//                 rl.close();
//             }else{
//                 rl.setPrompt(`Your answer ${userinput} is wrong, try again \n`);
//                 rl.prompt();
//             }
//         })
//     }
// });

// rl.on('close', () => {
//     console.log('Correct!!');
// });

const fs = require('fs');
// //create a file
// fs.writeFile('example.txt', "this example text", (err) => {
//     if(err) console.log(err);
//     else console.log('File created');

//     fs.readFile('example.txt', 'utf8' ,(err, file) => {
//         if(err) console.log(err);
//         else console.log(file);
//     });
// });

//rename file
// fs.rename('example.txt', 'example2.txt', (err)=>{
//     if(err) console.log(err);
//     else console.log("Rename success");
// });

//append to file
// fs.appendFile('example2.txt', 'new data appended', (err)=> {
//     if(err) console.log(err);
//     else console.log('Append success');
// });

//delete file
// fs.unlink('example2.txt', (err)=>{
//     if(err) console.log(err);
//     else console.log('delete success');
// });