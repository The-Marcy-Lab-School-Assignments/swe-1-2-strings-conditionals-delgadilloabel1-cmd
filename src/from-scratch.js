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

const rounder = () => {
};

const formatName = () => {
};

const extractDomain = () => {
};

const startsWithVowel = () => {
};

const rotate = () => {
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
