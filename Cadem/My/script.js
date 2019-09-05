'use strict'

let arr = [1,2,23,442,1234],
  i = arr.sort(compareNum);

  function compareNum(a,b){
    return a-b;
  }

console.log(arr);
