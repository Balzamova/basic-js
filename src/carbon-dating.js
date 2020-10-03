const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result;
 // typeof(result) === 'number';
  if (sampleActivity !== null) {
    typeof(sampleActivity.Number) === 'number';
    return result = Math.ceil(sampleActivity.Number * 22387);
  } else return false;

};
