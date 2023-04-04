function hasTargetSum(array, target) {

  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
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
Iterate over the array of numbers
For the current number find a complementary number that adds up to the target.
Iterate over the rest of the array.
Return true if any of the remaining numbers is a complement
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
