// spread operators
//  const arr= ['apple','bananaa','orange'];
// const obj={...arr};
// console.log(obj);
// // Array literals
const array = [1,2,3,4,5,6,7,8,9];
const array2= [...array];
console.log(array2);
//object literals
let object={
    'name': "Hajira",
    'age': "21"
}
let obj2={
    'background':'b.tech',
    'expertise': 'nothing'
}
let obj3= {...object,...obj2}
console.log(obj3);

console.log({...obj2,...array});

// console.log(response)