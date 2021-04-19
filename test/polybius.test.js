const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should return false if odd number is given", () => {
    const message = "44324233521254134";
    const actual = polybius(message, false);
    expect(actual).to.be.false;
  });
  it("should encode a message", () => {
    const message = "thinkful";
    const actual = polybius(message);
    const expected = "4432423352125413";
    expect(actual).to.equal(expected);
  });
  it("should decode a message", () => {
    const message = "4432423352125413";
    const actual = polybius(message, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("should include spaces while encoding", () => {
    const message = "Hello world";
    const actual = polybius(message);
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });
  it("should include spaces while decoding", () => {
    const message = "3251131343 2543241341";
    const actual = polybius(message, false);
    const expected = "hello world";
    expect(actual).to.equal(expected);
  });
  it("should translate 42 to i and j while encoding", () => {
    const message = "thinkful";
    const actual = polybius(message);
    const expected = "4432423352125413";
    expect(actual).to.equal(expected);
  });
  it("should translate 42 to i and j while decoding", () => {
    const message = "4432423352125413";
    const actual = polybius(message, false);
    const expected = "th(i/j)nkful";
    expect(actual).to.equal(expected);
  });
});
