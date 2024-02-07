const name = "Sovan"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String("SovanDas")

console.log(gameName[0]);
console.log(gameName.__proto__);



console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("D"));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8, 2)
console.log(anotherString);

const newStingOne = "       Sovan*Das       "
console.log(newStingOne);
console.log(newStingOne.trim())

const url = "https://github.com/sovandas089/JavaScript"
console.log(url);
console.log(url.replace("089", "077"));

console.log(url.includes("sovan"));
console.log(url.includes("Akku"));

console.log(newStingOne.split("*"));

