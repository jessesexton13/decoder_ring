const polybiusModule = (function () {
  function polybius(input, encode = true) {
    //create alphabet to correspond with number pairs
    const alphabet = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "(i/j)",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };
    //handle capitalization
    input = input.toLowerCase();
    let result = "";
    if (encode) {
      for (let characters in input) {
        const character = input[characters];
        //handle spaces
        if (character === " ") {
          result += character;
          continue;
        }
        //handle i/j
        if (character === "i" || character === "j") {
          result += 42;
          continue;
        }
        //add letters to result
        for (let letters in alphabet) {
          if (character === alphabet[letters]) result += letters;
        }
      }
    } else {
      //handle odd number inputs
      for (let numbers in input) {
        let checkIfEven = input.split(" ");
        for (let word in checkIfEven) {
          if (checkIfEven[word].length % 2 != 0) {
            return (result = false);
          }
        }
        //handle spaces
        const pair = `${input[0]}${input[1]}`;
        if (input[0] === " ") {
          result += input[0];
          input = input.slice(1);
          continue;
        }
        //add letters to result
        for (let values in alphabet) {
          if (pair === values) {
            result += alphabet[values];
          }
        }
        input = input.slice(2);
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
