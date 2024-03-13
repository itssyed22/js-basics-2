let myString = prompt("Enter any word and check if it is a palindrome or not.");
let isPalindrome = true;

for (let i = 0; i < myString.length / 2; i++) {
    if (myString[i] !== myString[myString.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("It's a palindrome.");
} else {
    console.log("It's not a palindrome.");
}
