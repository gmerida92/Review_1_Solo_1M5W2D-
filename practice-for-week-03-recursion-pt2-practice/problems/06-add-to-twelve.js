/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/


function addToTwelve(arr) {
  // Your code here
  // Base Case
  if (arr.length < 2) return false
  // console.log('HERE1!!', arr)
  // if(!arr || arr.length === 1) return false;
  
  // let pointer = arr.shift()
  // console.log('HERE2!!', pointer)
  // console.log('HERE3!!', pointer + arr[0])
  // if (pointer + arr[0] === 12) return true

  if(arr[0] + arr[1] === 12) return true
  
  // Recursive Step
  arr.shift();
  return addToTwelve(arr)


}

console.log(addToTwelve([1, 3, 4, 7, 5]))


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}