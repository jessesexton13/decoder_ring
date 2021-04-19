const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should return false if no aplhabet is provided", () => {
    const message = "message";
    const actual = substitution(message);
    expect(actual).to.be.false;
  });
  it("should return false if no input is provided", () => {
    const message = "message";
    const alphabet = "not26";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  });
  it("should return false if any letters repeat", () => {
    const message = "message";
    const alphabet = "abcdefghijjlmnopqrstuvwxyz";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  });
  it("should encode a message when given substitution alphabet", () => {
    const message = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(message, alphabet);
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });
  it("should include spaces while encoding", () => {
    const message = "You are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(message, alphabet);
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });
  it("should include unique characters while encoding", () => {
    const message = "message";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(message, alphabet);
    const expected = "y&ii$r&";
    expect(actual).to.equal(expected);
  });
  it("should decode a message when given substitution alphabet", () => {
    const message = "jrufscpw";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(message, alphabet, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("should include unique characters while decoding", () => {
    const message = "y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(message, alphabet, false);
    const expected = "message";
    expect(actual).to.equal(expected);
  });
  it("should include spaces whioe decoding", () => {
    const message = "jrufscpw jrufscpw";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(message, alphabet, false);
    const expected = "thinkful thinkful";
    expect(actual).to.equal(expected);
  });
});
