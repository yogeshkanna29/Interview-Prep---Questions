# 1. Find the largest number

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function findLargest(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;

}

console.log(findLargest([10, 5, 20, 8])); // 20

````
</details>

---

# 2. Find the smallest number

<details>
    <summary><strong>Tap to view</strong></summary>

```js
function findSmallest(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log(findSmallest([10, 5, 20, 8])); // 5
````

</details>

---

# 3. Find sum of array

<details>
    <summary><strong>Tap to view</strong></summary>

```js
function arraySum(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}

console.log(arraySum([1, 2, 3, 4])); // 10
```

</details>

---

# 4. Find average

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function average(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return sum / arr.length;

}

console.log(average([10, 20, 30])); // 20

```
</details>

---

# 5. Count even numbers

<details>
    <summary><strong>Tap to view</strong></summary>

```js
function countEven(arr) {
let count = 0;

for (let num of arr) {
    if (num % 2 === 0) {
        count++;
    }
}

return count;
}

console.log(countEven([1, 2, 4, 7, 8])); // 3
```

</details>

---

# 6. Reverse an array

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function reverseArray(arr) {
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}

console.log(reverseArray([1, 2, 3, 4]));
// [4, 3, 2, 1]
```
</details>

---

# 7. Reverse a string

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function reverseString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

console.log(reverseString("hello")); // "olleh"
```

</details>

---

# 8. Check palindrome

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```
</details>

---

# 9. Find maximum and minimum

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
    }

    return { min, max };
}

console.log(findMinMax([5, 2, 9, 1, 7]));
// { min: 1, max: 9 }
```
</details>

---

# 10. Search an element — Linear Search

<details>
    <summary><strong></strong></summary>
    
```js
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log(linearSearch([10, 20, 30, 40], 30)); // 2
```
</details>

---

# 11. Count frequency of elements

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function frequency(arr) {
    let map = {};

    for (let num of arr) {
        if (map[num]) {
            map[num]++;
        } else {
            map[num] = 1;
        }
    }

    return map;
}

console.log(frequency([1, 2, 2, 3, 3, 3]));

// { 1: 1, 2: 2, 3: 3 }
```
</details>

---

# 12. Find duplicate elements

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    return [...duplicates];
}

console.log(findDuplicates([1, 2, 3, 2, 4, 3]));
// [2, 3]
```

and

```js
function findDuplicates(arr){
    let duplicates = new Set();
    let occurences = new Map();

    for(let num of arr){
        let currentCount = occurences.get(num) || 0;
        occurences.set(num, currentCount + 1);

        if(occurences.get(num) > 1){
            duplicates.add(num);
        }
    }
    return {duplicates, occurences};
}

console.log(findDuplicates([1, 1, 2, 2, 3, 4, 5, 6, 5, 6]));
```
</details>

---

# 13. Remove duplicates

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
// [1, 2, 3, 4]
```

and

```js
function removeDuplicates(arr) {
    let result = [];

    for (let num of arr) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }

    return result;
}
```
</details>

---

# 14. Find second largest number

<details>
    <summary><strong></strong></summary>
    
```js
function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num !== largest) {
            second = num;
        }
    }

    return second;
}

console.log(secondLargest([10, 5, 20, 8, 15]));
// 15
```
</details>

---

# 15. Check if array is sorted

<details>
    <summary><strong></strong></summary>
    
```js
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }

    return true;
}

console.log(isSorted([1, 2, 3, 4])); // true
console.log(isSorted([1, 3, 2, 4])); // false
```
</details>

---

# 16. Find missing number

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function findMissing(arr) {
    let n = arr.length + 1;

    let expected = n * (n + 1) / 2;

    let actual = 0;

    for (let num of arr) {
        actual += num;
    }

    return expected - actual;
}

console.log(findMissing([1, 2, 3, 5]));
// 4
``` 
</details>

---

# 17. Find multiple missing numbers

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function findMissing(arr) {
    let result = [];

    let max = arr[arr.length - 1];

    let set = new Set(arr);

    for (let i = arr[0]; i <= max; i++) {
        if (!set.has(i)) {
            result.push(i);
        }
    }

    return result;
}

console.log(findMissing([1, 3, 4, 6, 7, 8]));
// [2, 5]
```
</details>

---

# 18. Swap two numbers

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function swap(a, b) {
    [a, b] = [b, a];

    return [a, b];
}

console.log(swap(10, 20));
// [20, 10]
```
</details>

---

# 19. Factorial

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function factorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));
// 120
```

and

```js
function factorial(n){
    return n < 2 ? 1 : n * factorial(n - 1);
}
```
</details>

---

# 20. Fibonacci

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function fibonacci(n) {
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        console.log(a);

        let next = a + b;
        a = b;
        b = next;
    }
}

fibonacci(6);

// 0
// 1
// 1
// 2
// 3
// 5
```
</details>

---

# 21. Check prime number

<details>
    <summary><strong></strong></summary>
    
```js
function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
```
</details>

---

# 22. Reverse number

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function reverseNumber(n) {
    let reverse = 0;

    while (n > 0) {
        let digit = n % 10;

        reverse = reverse * 10 + digit;

        n = Math.floor(n / 10);
    }

    return reverse;
}

console.log(reverseNumber(1234));
// 4321
```
</details>

---

# 23. Count digits

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function countDigits(n) {
    let count = 0;

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}

console.log(countDigits(12345));
// 5
```
</details>

---

# 24. Sum of digits

<details>
    <summary><strong></strong></summary>
    
```js
function sumDigits(n) {
    let sum = 0;

    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return sum;
}

console.log(sumDigits(1234));
// 10
```
</details>

---

# 25. Count vowels

<details>
    <summary><strong>Tap to view</strong></summary>
    
```js
function countVowels(str) {
    let count = 0;

    for (let char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello world"));
// 3
```
</details>