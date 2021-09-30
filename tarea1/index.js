//Exercise 1

let letters = ['a','a','b','b','c','a','b','c'];
const amountLetters = letters.reduce((countLetters, letter)=>{countLetters[letter] = (countLetters[letter] || 0) +1;
return countLetters;}, []);

console.log(amountLetters);


//Exercise 2

let arr = [1, [2, 3], 4, 5, [6, [7]]];
console.log(arr.flat(2));

//Exercise 3




//Exercise 4

function squareNumbers(number) {
    return (number.toString().split('').map(val => val * val).join(''));
}
console.log(squareNumbers(9119));

