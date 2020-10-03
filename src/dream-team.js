const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = '';
  for (let i=0; i<members.length; i++) {
    result += members.splice(members[i][0],1);
    return result.toUpperCase().sort();
  }
};
