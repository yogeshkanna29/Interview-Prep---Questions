# 1. Reverse a String

```js
function reverseString(str){
    return str.split("").reverse().join("");
}

reverseString("Hello");
```

without built-in function

```js
function reverseString(str){
    let result = "";

    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }
    return result;
}

console.log(reverseString("Hello"));
```

# 2. Palindrome

```js
function isPalindrome(str){
    let result = str.split("").reverse().join("");
    return str === result;
}

console.log(isPalindrome("madam"));
```

without built-in function

```js
function isPalindrome(str){
    let left = 0;
    let right = str.length - 1;

    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("madam"));
```

# 3. Remove Duplicates from Array

```js
const arr = [1,2,2,3,4,4,5];

const unique = [...new Set(arr)];

console.log(unique);
```

without built-in function

```js
function removeDuplicates(arr){
    let result = [];

    for(let num of arr){
        if(!result.includes(num)){
            result.push(num);
        }
    }
    return result;
}
const arr = [1,2,2,3,4,4,5];
console.log(removeDuplicates(arr));
```

# 4. Flatten Array

```js
const arr = [1,[2,[3,4],5]];

console.log(arr.flat(Infinity));
```

Without flat()

```js
function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

const arr = [1, [2, [3, 4], 5]];
console.log(flatten(arr));
```

# 5. Frequency Count

```js
const arr = [1, 2, 2, 3, 3, 3];

function frequencyCount(arr) {
  const freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}

console.log(frequencyCount(arr));
```

# 6. Two Sum

```js
function twoSum(nums, target){
    const map = new Map();

    for(let i = 0; i <= nums.length; i++){
        const compliment = target - nums[i];

        if(map.has(compliment)){
            return [map.get(compliment), i];
        }
        map.set(nums[i], i);
    }
}
```

# 7. Promise.all()

```js
const p1 = Promise.resolve("One");
const p2 = Promise.resolve("Two");
const p3 = Promise.resolve("Three");

Promise.all([p1,p2,p3])
.then(result => console.log(result))
.catch(err => console.log(err));
```

# 8. map()

```js
const nums = [1,2,3,4];

const doubled = nums.map(num => num * 2);

console.log(doubled);
```

# 9. filter()

```js
const nums = [1,2,3,4,5];

const even = nums.filter(num => num % 2 === 0);

console.log(even);
```

# 10. reduce()

```js
const nums = [1,2,3,4];

const sum = nums.reduce((acc,num) => acc + num,0);

console.log(sum);
```

| Method     | Purpose                             | Returns                                    |
| ---------- | ----------------------------------- | ------------------------------------------ |
| `map()`    | Transform each element              | New array (same length)                    |
| `filter()` | Select matching elements            | New array (same or shorter)                |
| `reduce()` | Combine all elements into one value | Single value (number, object, array, etc.) |

```js
const nums = [1,2,3,4,5];

const mapResult = nums.map(x => x * 2);
// [2,4,6,8,10]

const filterResult = nums.filter(x => x % 2 === 0);
// [2,4]

const reduceResult = nums.reduce((sum,x) => sum + x,0);
// 15
```

