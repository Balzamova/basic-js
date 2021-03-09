const CustomError = require("../extensions/custom-error");
/*конструктор этого класса принимает true (или ничего) для создания 
  прямой машины и false для создания обратной машины.  */
/*Методы encrypt и decrypt принимают 2 обязательных параметра
    (иначе выдать ошибку): строка для декодирования и ключевое слово-строка */
/*Текст, возвращаемый этими методами, должен быть в верхнем регистре. 
Машины шифруют и расшифровывают только латинский алфавит 
(все остальные символы остаются без изменений). */

class VigenereCipheringMachine {
  constructor(direction=true) {
    this.direction = direction;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    };

    let result = [];
    let mesLetterNumber = 0; // номер буквы в сообщении
    let keyLetterNumber = 0; // номер буквы в ключе
    let encoderLetterNumber = 0; // номер буквы в кодере
    this.message = message.toUpperCase();
    this.key = key.toUpperCase();

    for (let i = 0, j = 0; i < this.message.length; i++) {
      if (this.message[i].match(/[A-Z]/)) {

        mesLetterNumber = this.alphabet.indexOf(this.message[i]);
        keyLetterNumber = this.alphabet.indexOf(this.key[j % key.length]);
        encoderLetterNumber = (mesLetterNumber + keyLetterNumber) % 26;
        result.push(this.alphabet[encoderLetterNumber]);
        j++;
      } else {
        result.push(this.message[i]);
      }
    }
    return this.direction ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    };

    let result = [];
    let mesLetterNumber = 0;
    let keyLetterNumber = 0;
    let decoderLetterNumber = 0;
    this.message = message.toUpperCase();
    this.key = key.toUpperCase();

    for (let i = 0, j = 0; i < this.message.length; i++) {
      if (this.message[i].match(/[A-Z]/)) {

        mesLetterNumber = this.alphabet.indexOf(this.message[i]);
        keyLetterNumber = this.alphabet.indexOf(this.key[j % key.length]);
        decoderLetterNumber = (mesLetterNumber - keyLetterNumber >= 0)
        ? mesLetterNumber - keyLetterNumber
        : mesLetterNumber - keyLetterNumber + 26;

        result.push(this.alphabet[decoderLetterNumber]);
        j++;
      } else {
        result.push(this.message[i]);
      }
    }
    return this.direction ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;