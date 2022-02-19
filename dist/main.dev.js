"use strict";

function copy(list, funcVal) {
  // передаем в функцию массив и дополнительную функцию 
  var result = [];

  for (var i = 0; i < list.length; i++) {
    result[i] = funcVal(list[i]);
  }

  return result;
}

var list = [5, 7, 10, 3, 1];
var newList = copy(list, function (value) {
  return value * 10;
});
console.log(list);
console.log(newList);