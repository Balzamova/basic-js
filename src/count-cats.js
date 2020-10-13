const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  for (var i=0; i < matrix.length; i++) {
    for (var ears of matrix[i]) {
      if (ears == '^^') {
        result += 1;
      } 
    }
  };
  return result;
};
