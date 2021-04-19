const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //make input lower case, create reference alphabet
    input = input.toLowerCase();
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    //handle improper parameters
    if (shift === 0 || shift < -25 || shift > 25) return false;
    //handle decode
    if (encode === false) shift = -shift;
    //create result string and reference index
    let result = "";
    let newIndex = 0;
    for (let characters in input) {
      //declare reference point for current character
      let char = input[characters];
      //handle spaces and unique characters
      if (alphabet.indexOf(char) === -1) {
        result += char;
      }
      //find letters and add to result
      alphabet.find((letter) => {
        if (letter === char) {
          newIndex = alphabet.indexOf(letter) + shift;
          //handle letters at the end of the alphabet
          if (newIndex >= 26) newIndex -= 26;
          else if (newIndex <= -1) newIndex += 26;
          result += alphabet[newIndex];
        }
      });
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
