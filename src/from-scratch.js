const measureRain = (inches) => {
  if (inches === 0) {
    return "drought";
  } else if (inches < 2) {
    return "dry";
  } else if (inches < 4) {
    return "average";
  } else if (inches < 6) {
    return "rainy";
  } else if (inches >= 6) {
    return "flood";
  }

};

const happyBirthdayPet = (breed, age) => {
  if (breed === "snake") {
    return "Hiss hiss!"
  } else if (breed === "cat" && age < 5) {
    return "Mew mew!";
  } else if (breed === "cat" && age >= 5) {
    return "Meow meow!"
  } else if (breed === "dog" && age < 5) {
    return "Arf arf!"
  } else if (breed === "dog" && age < 10) {
    return "Woof woof!"
  } else if (breed === "dog" && age >= 10) {
    return "Boof!"
  } else {
    return "Happy birthday!"
  }
};

const funTypes = (jsType) => {
  if (jsType === null) {
    return "Nothing, and I did set that."
  } else if (Array.isArray(jsType)) {
    return "I order you to be indexed."
  } else if (typeof jsType === 'number' && isNaN(jsType)) {
    return "Well, now you're just showing off."
  } else if (typeof jsType === "object") {
    return "Anybody got the key?"
  } else if (typeof jsType === "string") {
    return "That's just some text."
  } else if (typeof jsType === "number") {
    return "That's a good number."
  } else if (typeof jsType === "boolean") {
    return "To bool, or not to bool?"
  } else if (typeof jsType === "undefined") {
    return "Nothing, but I didn't set that."
  }
};

const rounder = (float, roundSetting) => {
  if (roundSetting === "up") {
    return Math.ceil(float);
  } else if (roundSetting === "down") {
    return Math.floor(float)
  } else if (roundSetting === "honest") {
    return Math.round(float)
  }

};

const formatName = (first, last) => {
  let firstLetter = first[0].toUpperCase();
  let restOfFirst = first.slice(1).toLowerCase()
  let capFirst = firstLetter + restOfFirst;
  let lastLetter = last[0].toUpperCase()
  let restOfLast = last.slice(1).toLowerCase();
  let capLast = lastLetter + restOfLast
  return capFirst + " " + capLast;
};

const extractDomain = (email) => {
  const parts = email.split("@");
  return parts[1];
};

const startsWithVowel = (word) => {
  if (word[0].toLowerCase() === "a" || word[0].toLowerCase() === "e" || word[0].toLowerCase() === "i" || word[0].toLowerCase() === "o" || word[0].toLowerCase() === "u") {
    return true
  } else
    return false
};

const rotate = (str, num) => {
  const rotationAmount = num % str.length
  const splitIndex = str.length - rotationAmount
  const partToMove = str.slice(splitIndex)
  const restOfStr = str.slice(0, splitIndex)
  return partToMove + restOfStr
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};
