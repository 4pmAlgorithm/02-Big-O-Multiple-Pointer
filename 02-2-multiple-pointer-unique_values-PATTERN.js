// Implement a function called counteUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. 

//Time Complexity - O(N)
//Space Complexity - O(N)

//bonus
//constant
//O(1) space
//O(N) time


// function countUniqueValues(arr){
//     if(arr.length === 0) return 0;
//     var i = 0;
//     for(var j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     console.log(i + 1)
//     return i + 1;
// }

function countUniqueValues (arr) {
    if(arr.length === 0 ) return 0

    let i = 0

    for(let j = 1; j < arr.length; j ++){
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        } 
    }
    console.log(i+1)
    return i + 1
}

//check i and j separately
//                 i
countUniqueValues([1,2,2,5,7,7,99])
//                   j