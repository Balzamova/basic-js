const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false; //если не массив -> false

  let result = '';

  members.map(name => {   //для всех элементов массива проверить тип
    if (typeof name === 'string') {     //если это строка
                              //записать в result 1е значение, отбросив пробелы
      result = result.concat( name.trim().substr(0,1) ); 
    }
  })

  if (result === '') {    //если result оказался пустым, вернуть false
    return false;
  } else {               //иначе взять это 1е значение (1ю букву) в верхнем регистре, 
                        //сделать массив, отсортировать, сделать строку
    return result.toUpperCase().split('').sort().join('');
  }

};
