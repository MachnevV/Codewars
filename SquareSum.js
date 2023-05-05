// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1**2+2**2+2**2=9

function squareSum(numbers){
    let numArray = numbers;
    let sum = 0;
    for(let i = 0; i < numArray.length; i++){
        if(i < numArray.length){
        let square = numArray[i]**2;
        sum += square; 
        } else {
        break;
        }
    }
    return sum;
}