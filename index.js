function hasTargetSum(array, target) {
  let viewed = new Set();

  for (let i = 0; i < array.length; i++) {
    let num = target - array[i];

viewed.add(array[i]);

if(viewed.has(num)){
  return true;
}
  }
return false;
}

/* 
  O(n)
*/

/* 
  Add your pseudocode here
*/

/*
  Create a new set that store the already viewed numbers in the array.
  Iterate through the array to find the num.
  Check if we have already viewed the array and return to true if we have.
  Add the current num to the set .

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 9, 7, 5], 17));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
