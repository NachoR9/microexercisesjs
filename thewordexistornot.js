function theWordExistOrNot(teststring) {
    let stringLowerCase = teststring.toLowerCase()
    return stringLowerCase.includes("english") 
}

console.log(theWordExistOrNot("abcEnglishdef"));
console.log(theWordExistOrNot("abcnEglishsef"))
console.log(theWordExistOrNot("eNglisH"))
