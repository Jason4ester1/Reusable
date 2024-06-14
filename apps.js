
const numbers = [9, 6, 45, 12, 7];
 nums = numbers
function sumArray(numbers) {
    if (numbers.length === 0) {
        return 0;
    } else {
        return numbers[0] + sumArray(numbers.slice(1));
    }
}
console.log("Sum:", sumArray(numbers));
//sum of array of numbers
function averageArray(numbers) {
    if (numbers.length === 0) {
        return 0;
    } else {
        return sumArray(numbers) / numbers.length;
    }
}
console.log("Average:", averageArray(numbers));
//average of array of numbers
const strings = ['say', 'hello', 'in', 'the', 'morning'];
function longestString(strings) {
    if (strings.length === 0) {
        return null;
    } else {
        let longest = strings[0];
        for (let i = 1; i < strings.length; i++) {
            if (strings[i].length > longest.length) {
                longest = strings[i];
            }
        }
        return longest;
    }
}
console.log("Longest string:", longestString(strings));
//array of longest string
function stringsLongerThan(strings, length) {
    return strings.filter(string => string.length > length);
}
//array of strings and numbers
function printNumbersRecursive(n) {
    if (n > 0) {
        printNumbersRecursive(n - 1);
        console.log(n);
    }
}

console.log("Strings longer than 3 characters:", stringsLongerThan(strings, 3));
console.log("Printing numbers up to 5:");