/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time Complexity: ?
var twoSum = function(nums, target) {
    // intiailize an output array of size 2 <- result
    let result = [];

    // generate all the pairs from the array
    // Example:
    // nums = [2, 7, 11, 15]
    // Pairs:
    // (2, 7), (2, 11), (2, 15), (7, 11), (7, 15), (11, 15)
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            // find the sum of every pair
            let sum = nums[i] + nums[j];
            // compare with the target
            if(sum == target){
                // if the numbers are equal, push the indices to the result/output array       
                result.push(i, j);
            }
        }
    }

    return result;
};

/*
    nums = [2, 5, 6, 7, 8]
    target = 12

    N = 5

    i = 0; j = 1, 2, 3, 4
    i = 1; j = 2, 3, 4
    i = 2; j = 3, 4
    i = 3; j = 4

    Executions = 4 + 3 + 2 + 1 = 10

    Executions = Sum of N-1 Natural Numbers

    T(N) = (N * (N+1))/2 - N
         = 1/2 * (N * (N+1) - 2N)
         = N^2 + N - 2N
         = N^2 - N
         = N^2
         = O(N^2)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time Complexity: O(N^2)
// var twoSum = function(nums, target) {
//     // intiailize an output array of size 2 <- result
//     let result = [];

//     // generate all the pairs from the array
//     // Example:
//     // nums = [2, 7, 11, 15]
//     // Pairs:
//     // (2, 7), (2, 11), (2, 15), (7, 11), (7, 15), (11, 15)
//     for(let i=0; i<nums.length-1; i++){
//         for(let j=i+1; j<nums.length; j++){
//             // find the sum of every pair
//             let sum = nums[i] + nums[j];
//             // compare with the target
//             if(sum == target){
//                 // if the numbers are equal, push the indices to the result/output array       
//                 result.push(i, j);
//             }
//         }
//     }

//     return result;
// };

// Time Complexity: O(N)
var twoSum = function(nums, target) {
    // prepare the array with the current indices
    // let nums = [3, 2, 4]
    //            [0][1][2]
    // let numbers = [[0, 3], [1, 2], [2, 4]]

    let numbers = nums.map((value, index) => {
        return [index, value];
    });

    // sort the nums array in ascending order
    numbers.sort((a,b) => a[1]-b[1]);

    // set two pointers
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        let sum = numbers[left][1] + numbers[right][1];
        if(sum == target){
            return [numbers[left][0], numbers[right][0]];
        } else if(sum < target){
            left++;
        } else if(sum > target){
            right--;
        }
    }
};