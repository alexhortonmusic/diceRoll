'use strict';

module.exports = function (args) {
  var module = {}
  if (args.length < 1) {
    module.count = 1
    module.sides = 6
  } else if (args.length === 1){
    module.count = 1
    module.sides = args[0]
  } else {
    module.count = args[0]
    module.sides = args[1]
  }

  return module;
}
