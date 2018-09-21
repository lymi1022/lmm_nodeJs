let a = require('./4.js')  // ************* 这个方法的返回值,是所加载模块中的module.exports
console.log(global.a, 'a');
console.log(a); // { c: '4里面的js -----> 通过module' }
console.log(a.c);  // 4里面的js -----> 通过module

