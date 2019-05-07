const chai = require('chai');
const expect = chai.expect;
const cardValidator = require("../lib/index");

describe("cardValidator()", ()=> {
   it("Random insuficient numbers returns false", ()=> {
    expect(cardValidator(02029330)).to.equal(false)
   });

   it("It's the same numbers of type string and should returns false", ()=> {
    expect(cardValidator(000000000000000000)).to.equal(false)
  });
   it("Empty field of type string should returns false", ()=> {
    expect(cardValidator("")).to.equal(false)
  });
  it("Field with spaces of type string should returns false", ()=> {
    expect(cardValidator("         ")).to.equal(false)
  });
  it("It's a Mastercard, example 1, should returns true", ()=> {
    expect(cardValidator(5120248616514161)).to.equal(true)
  });
  it("It's a Mastercard, example 2, should returns true", ()=> {
    expect(cardValidator(5583059228343596)).to.equal(true)
  });
  it("It's a Visa credit card, example 1, should returns true", ()=> {
    expect(cardValidator(4556786193856337)).to.equal(true)
  });
  it("It's a Visa credit card, example 2, should returns true", ()=> {
    expect(cardValidator(4539036273581047)).to.equal(true)
  });
  it("It's an American Express credit card, example 1, should returns true", ()=> {
    expect(cardValidator(342461144229995)).to.equal(true)
  });
});