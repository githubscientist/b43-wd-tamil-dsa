/*
    Recursion : Algorithm

    A function that calls itself!
*/

// // non-recursive function
// function sayHello() {
//     console.log('hello');
// }

// sayHello();

// // recursive function
// function sayHello() {
//     console.log('hello');
//     sayHello();
// }

// sayHello();

/*
    Recursion Tree

    sayHello()
        - log('hello')
        - sayHello()
            - log('hello')
            - sayHello()
                - log('hello')
                - sayHello()
                ...
                ...
*/

// // recursive function
// function sayHello(times) {
//     // stopping condition
//     if (times == 0) return;

//     console.log('hello');
//     sayHello(times-1);
// }

// sayHello(3);

/*
    sayHello(3)
        - times = 3; 3 == 0; false
        - log('hello')
        - sayHello(2)
            - times = 2; 2 == 0; false
            - log('hello')
            - sayHello(1)
                - times = 1; 1 == 0; false
                - log('hello')
                - sayHello(0)
                    - times = 0; 0 == 0; true; return

*/

// recursive function
// function sayHello(times) {
//     // stopping condition
//     if (times == 0) return;

//     console.log('hello');
//     sayHello(times-1);
// }

// sayHello(5);

/*
    Time complexity: Number of recursive calls made
*/

// Example: 2
// Write a recursive function to print the N natural numbers

// Sample Input: 5
// Sample Output: 1 2 3 4 5

// Sample Input: 10
// Sample Output: 1 2 3 4 5 6 7 8 9 10

// Sample Input: 7
// Sample Output: 1 2 3 4 5 6 7

// non - recursive way or iterative way
// function printNumbers(N) {
//     for (let number = 1; number <= N; number++){
//         console.log(number);
//     }
// }

// printNumbers(5);

// recursion function
function printNumbers(N) {
    if (N == 0) return;
    
    printNumbers(N - 1);
    console.log(N);
}

printNumbers(5);

/*
    printNumbers(5)
        - N = 5; 5 == 0; false
        - printNumbers(4) 
            - N = 4; 4 == 0; false
            - printNumbers(3)
                - N = 3; 3 == 0; false
                - printNumbers(2)
                    - N = 2; 2 == 0; false
                    - printNumbers(1)
                        - N = 1; 1 == 0; false
                        - printNumbers(0)
                            - N = 0; 0 == 0; true
                            - return
                        - log(N) #1
                    - log(N) #2
                - log(N) #3
            - log(N) #4
        - log(N) #5
*/