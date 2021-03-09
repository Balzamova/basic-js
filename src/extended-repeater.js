const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  this.repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1; //количество повторений str
  this.separator = options.separator !== undefined ? options.separator : '+'; //разделитель для str или +
  this.addition = options.addition !== undefined ? options.addition : ''; //что добавить
  this.additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1; //сколько раз добавить
  this.additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|'; //разделитель для добавления или |
  
  let result='';
    
    for (let i = 0; i < this.repeatTimes; i++) {
        result = result.concat(str);

        for (let j = 0; j < this.additionRepeatTimes; j++) {
            result = result.concat(this.addition);      
            j < (this.additionRepeatTimes-1) ? result = result.concat(additionSeparator) : 0;
        }
        
        i < (this.repeatTimes - 1) ? result = result.concat(this.separator) : 0;
    }

    return result;
};
  