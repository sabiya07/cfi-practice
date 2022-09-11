// i=1
// function f1(n){
//     if(i==10){
//  return
// }
//  else{
//     console.log(i)
//     return f1(i++)
// }

// }
// f1(i)
//-----------------//

// function f(x,y){
//     if(y==0) return 0;
//     return (x+f(x,y-1))
// }

// console.log(f(2,3))

// function f(x,y){
//     if(y==0) return 0;
//     return (x+f(x,y-1))
// }
// function f2(a,b){
//     if(b==0) return 1;
//     return f(a,f2(a,b-1))

// }


// function f(n){
//     if(n==0|| n==1) return n;
//     if(n%3 !=0) return 0;
//     return f(n/3)
// }

// console.log(f())


// function robot(n,a,b){
//     if(n<=0){return;}
//     robot(n-1,b,b+n)
//     console.log(n,a,b)
//     robot(n-1,b,a+n)
// }
// robot(2,5,2)

//----------------------------------//

// function count(n){
//       var d=1
//       console.log(n);
//      console.log(d);
//       d++;
//        if(n>1)  {count(n-1)};
//        console.log(d)


// }
// count(3)

//---------------------------------------//

// function factorial(n){
//     if(n<=1) return 1;
//     return n*factorial(n-1)    
// }
// console.log(factorial(5))

//----------------------------------------//
// function f1(n){
//     return( n*2)
// }

// export default f1
//---------------------//