/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
  // Your code here
  // Base Case: Reached the end of the string
  if(str.length === 1 || str.length === 0) return str;

  let char = str.slice(-1);
  str = str.split("");
  str.pop();
  str = str.join("");

  // Recursive Step
  return char.concat(reverse(str))
}

// console.log(reverse('house'));
// reverse('house')


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}