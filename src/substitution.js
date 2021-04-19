const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    //set real alphabet
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz";
    // check alphabet length and if alphabet and input are parameters
    if (!alphabet || !input || alphabet.length !== 26) return false;
    //make input lowercase
    const lowerInput = input.toLowerCase();
    let finalWord = "";
    //check for duplicate letters
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = [i + 1]; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }
    //loop through characters of input
    for (let char of lowerInput) {
      //check if the char is a space
      if (char === " ") {
        finalWord += char;
        //add char for encode and decode
      } else {
        if (encode) {
          finalWord += alphabet[realAlphabet.indexOf(char)];
        } else {
          finalWord += realAlphabet[alphabet.indexOf(char)];
        }
      }
    }
    return finalWord;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
