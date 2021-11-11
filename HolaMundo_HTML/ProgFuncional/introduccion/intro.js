const hola="pedro";
const decihola=()=>{console.log(`HI ${hola}`);}
decihola();

const dhi=(name)=>`HI ${name}`;

console.log(dhi("jose"));

const sum = (a,b) => a + b;
const sum2 = (a,b) => a - b;
const suma = (a,b,sum) => sum(a,b);
console.log(suma(2,2,sum2));