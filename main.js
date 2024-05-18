const prompt = require('prompt-sync')();

function input(str) {
    return str.split('').reverse().join('');
}

function check() {
    const value = prompt('Type the word: ').toLocaleLowerCase();
    const reverse = input(value);

    if (value === reverse) {
        console.log(`the word "${value}" is a palindrome`);
    } else {
        console.log(`the word "${value}" is not a palindrome`);
    }

    if (value === "") console.log('say something!!!');
}
check();
