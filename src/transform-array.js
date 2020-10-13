const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '`--discard-next`')
        result = arr[i] + arr[i + 2];
      if (arr[i] === '`--discard-prev`')
        result = arr[i - 2] + arr[i];
      if (arr[i] === '`--double-next`')
        result = arr[i] + arr[i];
      if (arr[i] === '`--double-prev`')
        result = arr[i - 1] + arr[i - 1];
    }
  return result;
};
