const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;      

    for (let i = 0; i < arr.length; i++) {
      let count = 1;                                  
      if (Array.isArray(arr[i])) {           
        count += this.calculateDepth(arr[i]);     
        depth = (count > depth) ? count : depth;  
      };
    };

    return depth;
  }   
};
