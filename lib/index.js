function cardValidator(cardNumber) {
    if (!cardNumber || typeof cardNumber === "string") {
      return false;
    } 
    else {
      let arrayNumber = cardNumber.toString();
      const result = [];
  
      multiplyNumbers(arrayNumber, result);
      return moduleCard(result);
    }
  }
  
  function multiplyNumbers(arrayNumber, result) {
    for (let i in arrayNumber) {
      if (i % 2 === 0) {
        const multiply = arrayNumber[i] * 2;
        multiply > 9 ? result.push(multiply - 9) : result.push(multiply);
      } else {
        result.push(Number(arrayNumber[i]));
      }
    }
  }
  
  function addNumber(result) {
    return result.reduce((acc, cur) =>
     acc + cur);
  }
  
  function moduleCard(result) {
    if (addNumber(result) % 10 === 0) {
      return true;
    } 
    else {
      return false;
    }
  }
  
  module.exports = cardValidator;