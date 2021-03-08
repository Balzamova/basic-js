const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  for (let i=0; i < matrix.length; i++) {
    for (let ears of matrix[i]) {
      if (ears == '^^') {
        result += 1;
      } 
    }
  };
  return result;
};
