// function f(n) {
//     if (n / 2) {
//     f(Math.floor(n / 2));
//     }
//     console.log(n % 2);
//     }
//     f(1024);

    // function f(n) {
    //     if (n <= 1) {
    //     console.log(n);
    //     } else {
    //     f(Math.floor(n / 2));
    //     console.log(n % 2);
    //     }
    //     }
    //     f(1024);
        

        
        // function count(n) {
        //     var d = 1;
        //     console.log(n);
        //     console.log(d);
        //     d++;
        //     if (n > 1) count(n - 1);
        //     console.log(d);
        //     }
        //     count(3);


//             var n=5

// function fib(n){
//     if((n < 2 ) && (n>=0)) {
//         return n;
//     }
//     return fib(n-2)+fib(n-1)
// }

// console.log(fib(20))


// function fun(n) {
//     if (n == 0) return;
//     console.log(n % 2);
//     fun(Math.floor(n / 2));
//     }
//     fun(25)

    // function fun(n) {
    //     if (n == 0 || n == 1) return n;
    //     if (n % 3 != 0) return 0;
    //     return fun(n / 3);
    //     }
    //    console.log( fun(3))


    // function f(n) {
    //     if (n <= 1) return 1;
    //     if (n % 2 == 0) return f(n / 2);
    //     return f(Math.floor(n / 2)) + f(Math.floor(n / 2 + 1));
    //     }
    //     console.log(f(11));


        // function foo(n, r) {
        //     if (n > 0) return n % r + foo(Math.floor(n / r), r);
        //     else return 0;
        //     }
        //    console.log( foo(513, 2))


        // function f(n) {
        //     var i = 1;
        //     if (n >= 5) return n;
        //     n = n + i;
        //     i++;
        //     return f(n);
        //     }
        //     console.log(f(1))


        // function ths(n) {
        //     if (n < 1) return;
        //     ths(n - 1);
        //     ths(n - 3);
        //     console.log(n);
        //     }
        //     console.log(ths(8));

            function count(n) {
                var d = 1;
                console.log(n);
                console.log(d);
                d++;
                if (n > 1) count(n - 1);
                console.log(d);
                }
                console.log(count(3));
