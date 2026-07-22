/** Reverse string test */

// function reverseString(str){
//     return str.split("").reverse().join("");
// }

// // reverseString("Hello");
// console.log(reverseString("Hello"));

// function reverseString(str){
//     let result = "";

//     for(let i = str.length - 1; i >= 0; i--){
//         result += str[i];
//     }
//     return result;
// }

// console.log(reverseString("Hello"));

/** Palindrome string test */

// function isPalindrome(str){
//     let result = str.split("").reverse().join("");
//     return str === result;
// }

// console.log(isPalindrome("madam"));

// function isPalindrome(str){
//     let left = 0;
//     let right = str.length - 1;

//     while(left < right){
//         if(str[left] !== str[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// }

// console.log(isPalindrome("madam"));

/** Remove Duplicate from Array test */

// const arr = [1,2,2,3,4,4,5];

// const unique = [...new Set(arr)];

// console.log(unique);

// function removeDuplicates(arr){
//     let result = [];

//     for(let num of arr){
//         if(!result.includes(num)){
//             result.push(num);
//         }
//     }
//     return result;
// }
// const arr = [1,2,2,3,4,4,5];
// console.log(removeDuplicates(arr));

/** 4. Flatten Array test */

// const arr = [1,[2,[3,4],5]];

// console.log(arr.flat(Infinity));

// function flatten(arr) {
//   let result = [];

//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flatten(item));
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }

// const arr = [1, [2, [3, 4], 5]];
// console.log(flatten(arr));

/** 5. Frequency Count test */

// const arr = [1, 2, 2, 3, 3, 3];

// function frequencyCount(arr) {
//   const freq = {};

//   for (let num of arr) {
//     freq[num] = (freq[num] || 0) + 1;
//   }
//   return freq;
// }

// console.log(frequencyCount(arr));

/** 6. Two Sum test */

// function twoSum(nums, target){
//     const map = new Map();

//     for(let i = 0; i <= nums.length; i++){
//         const compliment = target - nums[i];

//         if(map.has(compliment)){
//             return [map.get(compliment), i];
//         }
//         map.set(nums[i], i);
//     }
// }

// console.log(twoSum([2,7,11,15],9));

/** Promises.all() test */
// const p1 = Promise.resolve("One");
// const p2 = Promise.resolve("Two");
// const p3 = Promise.resolve("Three");

// Promise.all([p1,p2,p3])
// .then(result => console.log(result))
// .catch(err => console.log(err));

/** 8. map() test */

// const nums = [1,2,3,4];

// const doubled = nums.map(num => num * 2);

// console.log(doubled);