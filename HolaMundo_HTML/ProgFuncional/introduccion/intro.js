/*const hola="pedro";
const decihola=()=>{console.log(`HI ${hola}`);}
decihola();

const dhi=(name)=>`HI ${name}`;

console.log(dhi("jose"));

const sum = (a,b) => a + b;
const sum2 = (a,b) => a - b;
const suma = (a,b,sum) => sum(a,b);
console.log(suma(2,2,sum2));*/

var numbers = [1,5,10,15];
var users=[
    {id:1,age:10,name:"tal"},
    {id:1,age:10,name:"tal"},
    {id:1,age:10,name:"tal"}
]
//map
var map = users.map((x)=>x*3);
//reduce
var reduce=numbers.reduce((previusvalue,currentvalue)=>previusvalue+currentvalue);
//filter
let filter = numbers.filter((num)=>num>6);
let filter2 = users.filter((user)=>user.age>14);
//concat
const arr1 = ["Cecilia", "Leones"];
const arr2 = ["Emi", "hoal", "Linus"];
const arr3 = arr1.concat(arr2);
//fill
arr3.fill("kiwi");
//every
arr3.every((element)=>{element.length>2});
//flat
const numberss = [1, 2, [3, 4, 5]];
const flatNumbers = numberss.flat();
//includes
console.log(numbers.includes(5));
//pop
var newarray=numbers.pop();
//push
var newarra2=numbers.push(16);
//slice
const citrus = numbers.slice(1, 2);
//sort
var sort=numbers.sort((a,b)=>a-b);
//splice
arr3.splice(2, 0, "Lemon", "Ki");
console.log(arr3);
