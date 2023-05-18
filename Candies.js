/**
* @param {number} totalCandies
 * @param {number[]} candies
 * @param {number} i
 * @return {boolean}
 */
// Time Complexity: O(N^2)
var isGreater = function(totalCandies, candies, i){
    // set my assumption to true
    let assumption = true;

    // iterate through the candies array <- index
    for(let index=0; index<candies.length; index++){
        // except for the index i
        if(index != i){
            // check if the totalCandies < candies[index]
            if(totalCandies < candies[index]){
                // update my assumption
                assumption = false;
            }
        }
    }
    
    // return the assumption
    return assumption;
}

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // create and intialize an empty array -> result
    let result = [];

    // iterate the candies array <- i = 0 to candies.length - 1
    for(let i=0; i < candies.length; i++){
        // for every candy in the candies array
        // find the candies[i] + extraCandies -> totalCandies
        let totalCandies = candies[i] + extraCandies;

        // check if the totalCandies is greater than all the other kids candies except the index i
        if(isGreater(totalCandies, candies, i)){
            // if true => push the result true to the result array
            result.push(true);
        } else {
            // else if false => push the result false to the result array
            result.push(false);
        }
    }
    
    // return the result array
    return result;
};

/*
    1. Problem Understanding

    candies = [2, 3, 5, 1, 3] ; length - n
            i [0][1][2][3][4]
    
    extraCandies = 3

    result = [true, true, ,  , ] ; length - n
           i [0]    [1]   [2][3][4]
    
    i = 0
        candies[i] + extraCandies
        = candies[0] + 3
        = 2 + 3
        = 5 >=[3, 5, 1, 3]
              [1][2][3][4]
        
        5 >= 3 True
        5 >= 5 True
        5 >= 1 True
        5 >= 3 True

        Result = True

    i = 1
        totalCandies = candies[1] + extraCandies
                     = 3 + 3
                     = 6 >= [2, 5, 1, 3]
                            [0][2][3][4]
        6 >= 2 true
        6 >= 5 true
        6 >= 1 true
        6 >= 3 true

    2. Algorithm (Feasible)

    // create and intialize an empty array -> result

    // iterate the candies array <- i = 0 to candies.length - 1
        // for every candy in the candies array
        // find the candies[i] + extraCandies -> totalCandies

        // check if the totalCandies is greater than all the other kids candies
            // if true => push the result true to the result array
            // else if false => push the result false to the result array
    
    // return the result array

    3. Implementation

    (Any of the language of your choice)
*/