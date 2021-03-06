const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Error: arr is not an Array');
  }

  let result = arr.slice(); // содаем копию массива

  for (let i = 0; i < result.length; i++) {
    if (result[i] === '--discard-next') {
      result.splice(i, 2, null);
    } else if (result[i] === '--discard-prev') {
      if (i === 0) { 
        result.splice(i, 1, null); 
      } else { 
        result.splice(i - 1, 2, null); 
      }
    } else if (result[i] === '--double-next') {
      if (i === result.length - 1) { 
        result.splice(i, 1); 
      } else { 
        result.splice(i, 1, result[i + 1]); 
      }
    } else if (result[i] === '--double-prev') {
      if (i === 0) { 
        result.splice(i, 1, null); 
      } else { 
        result.splice(i, 1, result[i - 1]); 
      }
    }
  }
  return result.filter(el => el !== null);
};
