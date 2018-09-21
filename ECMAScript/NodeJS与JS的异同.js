// 相同点
// 在ecmaScript部分nodejs和js其实是一样的
// 数据类型的定义，语法结构，内置对象
let a = 100
console.log(a);

let d = new Date()
console.log(d.getFullYear() + '-', d.getMonth() + 1 + '-', d.getDay());

function Person(name) {
  this.name = name
}
Person.prototype.run = function () {
  console.log(this.name, 'running');
}
var p1 = new Person('leo')
p1.run()


// 不同点
// 在node中的顶层对象
// global ===> 注意在node中没有window对象

