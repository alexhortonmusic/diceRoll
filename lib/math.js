'use strict';

const randomInt = (upper, lower) => {
  //should return random integer between 'upper' and 'lower'
  // lowest lower equals number of dice, highest upper equals number of dice times number of sides on each die (if both dice have same amount of sides)
  let up = parseInt(upper)
  let low = parseInt(lower)
  return Math.floor((Math.random() * up) + low)
}

module.exports = { randomInt }
