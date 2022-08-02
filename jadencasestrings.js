// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
function toJadenCase(str) {
    let arr = str.split(' ')
    let jaden = []
    for(i=0; i<=arr.length-1; i++){
        // console.log(arr[i][0].toUpperCase() + arr[i].slice(1,arr[i].length))
        jaden.push(arr[i][0].toUpperCase() + arr[i].slice(1,arr[i].length))
    }
    console.log(jaden.join(' '))
};
toJadenCase("How can mirrors be real if our eyes aren't real")