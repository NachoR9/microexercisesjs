function reverseWords(str) { 
    let words = str.trim().split(" ") 
    return words.reverse().join(" ")  
}

let string1 = " Hi There"
let string2 = "I love my dog"

console.log(reverseWords(string1));
console.log(reverseWords(string2));