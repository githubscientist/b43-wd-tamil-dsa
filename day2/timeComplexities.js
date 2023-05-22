/*
    Either to compare one algorithm with another algorithm or to evaluate the performance of a single algorithm
        - time complexity
        - space complexity
    
    time complexity: amount of time taken by an algorithm to run

    represented as a function of length of input

    mathematical notations: asymptotic notations

    1. Big - 'O' (Oh) - Upper Bound
    2. Big - 'Ω' (Omega) - Lower Bound
    3. Big - 'Θ' (Theta) - Tight Bound

    Situations/Cases: (Inputs)

    1. Worst Case
    2. Best Case
    3. Average Case

    Time Complexity: Upper Bound, Worst Case - Big - 'O'

    Example:

    Algorithm: Linear Search

    Numbers = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]

    Case(first element): If the key = 1, comparisons => best case => O(1) - abbr: Order of 1

    Case(middle element): If the key = 5, comparisons => 5 => average case => O(N/2) => O(N)

    Case(last element): If the key = 10, comparisons => 10 => Worst Case => O(N)
        (element not present): If the key = 12, comparisons => 10 => N => O(N)
*/

/*
    Example 1:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Options:

    O(1)
    O(logN)
    O(N)
    O(N logN)
    O(N^2)
    O(N^2 logN)
    O(N^3)
    O(N^3 logN)
    O(2^N)
    O(N!)

    Solution: O(N+M)

    let a = 0, b = 0; => declarations, conditionals, expressions, assignments
    => O(1), Constant Time

    for (i = 0; i < N; i++) {
        a = a + rand();
    }

    total executions = values of i
    i = 0, 1, 2, 3, 4, 5, ...., N-1 => N

    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    total executions = values of j
    j = 0, 1, 2, 3, 4, 5,..., M-1 => M

    total time complexity = T(N, M) = 1 + N + M
                                    = N + M (since 1 is constant and can be ignored)
                                    = O(N+M)
*/

/*
    Example 2:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }

    total time complexity, T(N) = 1 + N + N
                                = 1 + 2N
                                = 2N (since 1 is a constant and can be ignored)
                                = N (since 2 is a constant and can be ignored)
                                = O(N)
*/

/*

    Example 3:

    let M = 2N;
    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    time complexity, T(N) = 1 + N + 2N
                          = 3N
                          = N
                          = O(N)


*/

/*
    Example 4:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand(); // O(1)
        for (j = 0; j < N; j++) {
            b = b + rand(); // O(1)
        }
    }

    time complexity: O(N^2)

    time complexity: T(N) = N * N
                          = N^2
                          = O(N^2)
    
    N = 4
        i = 0; j = 0, 1, 2, 3 => 4 times
        i = 1; j = 0, 1, 2, 3 => 4 times
        i = 2; j = 0, 1, 2, 3 => 4 times
        i = 3; j = 0, 1, 2, 3 => 4 times
    
        total executions = 4 + 4 + 4 = 4
                         = 16
    
    For N = 4, executions = 16
    For N = 5, executions = 25
    For N = 6, executions = 36


    N^2
    = O(N^2)


*/

/*
    Example: 5

    let a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    time complexity: ?

    N = 5
        i = 0; j = 5, 4, 3, 2, 1 => 5 times
        i = 1; j = 5, 4, 3, 2 => 4 times
        i = 2; j = 5, 4, 3 => 3 times
        i = 3; j = 5, 4 => 2 times
        i = 4; j = 5 => 1 time
    
    total executions = 5 + 4 + 3 + 2 + 1
                     = 15
    
    N = 6
        i = 0; j = 6, 5, 4, 3, 2, 1 => 6 times
        i = 1; j = 6, 5, 4, 3, 2 => 5 times
        i = 2; j = 6, 5, 4, 3 => 4 times
        i = 3; j = 6, 5, 4 => 3 times
        i = 4; j = 6, 5 => 2 times
        i = 5; j = 6 => 1 times

    total executions = 6 + 5 + 4 + 3 + 2 + 1
                     = 21
    
    For N = 5, executions = 15
    For N = 6, executions = 21

    total executions = sum of first N natural numbers
                     = 1 + 2 + 3 + 4 + ....+ (N-3) + (N-2) + (N-1) + N
                     = (1+N) + (2 + (N-1)) + (3 + (N-2)) + .... + (N+1)
                     = (N+1) + (N+1) + (N+1) + .... + (N+1)
                     = (N/2) * (N+1)
                     = (N * (N+1))/2
    
    For N = 5, executions = (N * (N+1))/2
                          = (5 * (6))/2
                          = 30/2
                          = 15
    
    Total time complexity, T(N) = 1 + (N * (N+1))/2
                                = (N * (N+1))/2 (since 1 is constant)
                                = (N^2 + N)/2
                                = 1/2 * (N^2 + N)
                                = (N^2 + N) (since 1/2 is a constant)
                                = N^2 (since N is too small and can be ignored)
                                = O(N^2)

*/

/*
    Example: 6

    let i, j, k = 0;
    for (i = n / 2; i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    } 

    time complexity: ?

    N = 6, i = 3, 4, 5, 6

    Outer loop: N/2 + 1

    Inner loop:

    j = 2, 4, 8, 16, 32, 64, 128, ...., N

    For N = 10; j = 2, 4, 8; executions = 3
    For N = 29; j = 2, 4, 8, 16; executions = 4
    For N = 30; j = 2, 4, 8, 16; executions = 4
    For N = 31; j = 2, 4, 8, 16; executions = 4
    For N = 40; j = 2, 4, 8, 16, 32; executions = 5

    2^X = N, X is unknown, Solve for X?

    Apply log2 on both the sides,

    log2(2^X) = log2(N)

    X log2(2) = log2(N) [since loga^b = b loga]

    X(1) = log2(N)

    X = log2(N)

    For N = 10, executions = log2(10) = 3
    For N = 29, executions = log2(29) = 4
    For N = 30, executions = log2(30) = 4
    For N = 31, executions = log2(31) = 4
    For N = 40, executions = log2(40) = 5

    total time complexity, T(N) = 1 + (N/2 + 1) * (log2(N))
                                = N/2 * log2(N) + log2(N)
                                = 1/2 * N * log2(N) + log2(N)
                                = N * log2(N) + log2(N)
                                = N * log2(N)
                                = O(N log2(N))

*/

// console.log(10, Math.log2(10));
// console.log(29, Math.log2(29));
// console.log(30, Math.log2(30));
// console.log(31, Math.log2(31));
// console.log(40, Math.log2(40));

/*
    O(2^N)

    Example Problem: Given an array of numbers A of size N, find in how many ways we can select the K numbers from array A. Where 0, 1, 2, 3, ....K is the range.

    Sample Input: [1, 2]

    Output:

    select 0 items => () => 1 way
    select 1 item => (1), (2) => 2 ways
    select 2 items => (1, 2) => 1 way

    Total number of ways = 4 ways

    Sample Input: [1, 2, 3]

    Output:

    select 0 items => () => 1 way
    select 1 item => (1), (2), (3) => 3 ways
    select 2 items => (1, 2), (1, 3), (2, 3) => 3 ways
    select 3 items => (1, 2, 3) => 1 way

    Total number of ways = 1 + 3 + 3 + 1
                         = 8 ways

    For N = 2, Number of ways = 4
    For N = 3, Number of ways = 8
    For N = 4, Number of ways = 16

    ...


*/

/*
    N!

    Example Problem: 

    Given a string S of size N, find and print the number of ways in which the string characters can be rearranged.

    Sample Input:

    ab

    Output:

    ab
    ba

    Number of ways = 2


    Sample Input:

    abc

    Output:

    abc
    acb
    bac
    bca
    cab
    cba

    Number of ways = 6

    Sample Input:

    abcd

    Output:

    abcd
    abdc
    acdb
    acbd
    adbc
    adcb
    bacd
    bcad
    bcda
    ...
    ...

    For N = 2, Number of ways = 2
    For N = 3, Number of ways = 6
    For N = 4, Number of ways = 24

    O(N!)

    N! = N x (N-1) x (N-2) x (N-3) x (N-4) x ..... 1
*/