'use strict';

const { randomInt } = require('./math')

const toDiceNotation = (diceObj) => {
  //convert diceObj to a string
  let diceStr = `${diceObj.count}d${diceObj.sides}`
  return diceStr;
}

const roll = (diceNotation) => { //accepts diceStr
  let rollArr = diceNotation.split('d')
  //use math module here to get random number
  return randomInt(rollArr[1], rollArr[0])
}

module.exports = { roll, toDiceNotation };
