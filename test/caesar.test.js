const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should return false if the shift amount is zero", () => {
    const message = "message";
    const shift = 0;
    const actual = caesar(message, shift);
    expect(actual).to.be.false;
  });
  it("should return false if the shift amount is less than -25", () => {
    const message = "message";
    const shift = -26;
    const actual = caesar(message, shift);
    expect(actual).to.be.false;
  });
  it("should return false if the shift amount is more than 25", () => {
    const message = "message";
    const shift = 26;
    const actual = caesar(message, shift);
    expect(actual).to.be.false;
  });
  it("should encode a message using a positive shift shift amount", () => {
    const message = "thinkful";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });
  it("should decode a message using a positive shift shift amount", () => {
    const message = "wklqnixo";
    const shift = 3;
    const actual = caesar(message, shift, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("should encode a message using a negative shift amount", () => {
    const message = "thinkful";
    const shift = -3;
    const actual = caesar(message, shift);
    const expected = "qefkhcri";
    expect(actual).to.equal(expected);
  });
  it("should decode a message using a negative shift amount", () => {
    const message = "qefkhcri";
    const shift = -3;
    const actual = caesar(message, shift, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters and include spaces and unique characters while encoding", () => {
    const message = "This is a secret message!";
    const shift = 8;
    const actual = caesar(message, shift);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters and include spaces and unique characters while decoding", () => {
    const message = "Bpqa qa i amkzmb umaaiom!";
    const shift = 8;
    const actual = caesar(message, shift, false);
    const expected = "this is a secret message!";
    expect(actual).to.equal(expected);
  });
  it("should handle letters at the end of the alphabet while encoding", () => {
    const message = "zebra";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "cheud";
    expect(actual).to.equal(expected);
  });
  it("should handle letters at the end of the alphabet while decoding", () => {
    const message = "cheud";
    const shift = 3;
    const actual = caesar(message, shift, false);
    const expected = "zebra";
    expect(actual).to.equal(expected);
  });
});
