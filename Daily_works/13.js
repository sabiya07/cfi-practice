// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
//   // printing star
//   for (let k = 0; k < n - i; k++) {
//     string +=  "*";
//   }
//   string += "\n";
// }
// console.log(string);


// let n = 0;
// let string = "";
// for (let i = 0; i < n; i++) {
//   // printing star
//   for (let k = 0; k < n - i; k++) {
//     string +=  "*";
//   }
//   string += "\n";
// }
// console.log(string);




//break and continue
//break=stop next iterations
//skip current iterations
// for(i=1;i<=10;i++){
  
//   if(i==5){
//   continue;}
//   console.log(i)
// }


// i=1
// while(i<=10){
  
  
//     if(i===6){
//       i++
//       continue;
//     }
//     console.log(i)
//     i++
//   }



//functions
// function even(a){
//   if((a%2)==0)
//   console.log(a ,"is even")
// }

// for(a=1;a<=6;a++){
//   even(a)
// }

// a={1:'a',2:'b',3:'c'}
// console.log(a)

//console.log(i)
//find the biggest/greatest number in the given arra
  
    

a = [23,1,25,16,190,6,9,10]
// a[0]=24
// console.log(a)
function max(a){
    b = a[0] //23
    for (i=1;i<=(a.length-1);i++){ 
        console.log(a[i]>b)
        if (a[i]>b){ //1>23, 25>23, 16>25,19>25,6>25,9>25,10>25
            b = a[i] //25
            // console.log(a)
        }
    }
    return b
}
console.log(max(a))

