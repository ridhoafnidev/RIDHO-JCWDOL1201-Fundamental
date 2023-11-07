// Create a function to convert Excel sheet column title to its corresponding column number.
// ● Example :
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...
// ● Example :
// ○ Input : AB
// ○ Output : 28
const titleToNumber = (n) => {
    let res = 0
    for (let i = 0; i < n.length; i++) {
        res = res * 26 + n[i].charCodeAt(0) - 65 + 1;
    }
    return res
}
console.log('res', titleToNumber('AB'));

// Given a non-empty array of integers nums, every element appears twice except for one. Find that
// single one.
// Input: nums = [2,2,1]
// ○ Output: 1

const twiceExceptToOne = (...arr) => {
    const set = new Set()
    arr.forEach(item => {
        if (set.has(item)) set.delete(item)
        else set.add(item)
    })

    for (let item of set) {
        return item
    }

}

console.log(twiceExceptToOne(4, 1, 2, 1, 2));

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// ● Example 1:
// ○ Input: s = "anagram", t = "nagaram"
// ○ Output: true
// ● Example 2:
// ○ Input: s = "rat", t = "car"
// ○ Output: false

const anagram = (word1, word2) => {
    let alphabet1 = word1.split('').sort().join()
    let alphabet2 = word2.split('').sort().join()
    return alphabet1 === alphabet2
}
console.log('is anagram', anagram('anagram', 'nagaram'));


// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
// steps. In how many distinct ways can you climb to the top?
// ● Example 1:
// ○ Input: n = 2
// ○ Output: 2
// ○ Explanation: There are two ways to climb to the top.
// ■ 1. 1 step + 1 step
// ■ 2. 2 steps

// ● Example 2:
// ○ Input: n = 3
// ○ Output: 3
// ○ Explanation: There are three ways to climb to the top.
// ■ 1. 1 step + 1 step + 1 step
// ■ 2. 1 step + 2 steps
// ■ 3. 2 steps + 1 step
let climStairs = (n) => {
    if (n === 1) return 1
    if (n === 2) return 2

    let arr = [1, 2]
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    console.log(arr);
    return arr[arr.length - 1]

}

console.log('steps', climStairs(3));
