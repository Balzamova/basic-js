const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
 if (!date || date == undefined || date == '0') return 'Unable to determine the time of year!';

 let seasons = ['winter', 'spring', 'summer', 'autumn'];
 let month = date.getMonth();
 let season = '';

 if (month == '0' || month == '1' || month == '11') return seasons[0];
 if (month == '2' || month == '3' || month == '4') return seasons[1];
 if (month == '5' || month == '6' || month == '7') return seasons[2];
 else return seasons[3];
};
