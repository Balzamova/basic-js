const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //Дано: кол-во дисков и скорость перемещения дисков (оборотов/час)
  //5, 4074
  //Найти: минимальное количество ходов для решения головоломки

  let turns = Math.pow(2,disksNumber)-1;  
  // turns = 2**5 - 1 = 32 -1 = 31

  //Найти: минимальное количество секунд для решения головоломки 
  //при заданной скорости поворота (секунды - целые числа, округленные в меньшую сторону)
  let seconds = Math.floor(turns/(turnsSpeed/3600));
  // 32 / (4074/3600) = 32 / 1.131 = 28.29 = 28
  
  return {
    turns: turns,
    seconds: seconds,
  };

};
