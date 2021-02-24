// 原型链继承
// 引用类型属性被所有实例共享；在创建child时不能向parent传参
// function Parent() {
// 	this.name = 'kevin'
// 	this.ref = [1, 2, 3]
// }
// Parent.prototype.getName = function() {
// 	console.log(this.name)
// }

// function Child(name) {
// 	this.name = name
// }
// Child.prototype = new Parent()

// var child1 = new Child('child1')
// var child2 = new Child('child2')
// child1.getName()
// child2.getName()
// child1.ref.push('child1')
// console.log(child1.ref)
// console.log(child2.ref)

// 借用构造函数继承
// 避免了引用类型被共享，可以向parent传参
// 方法都在构造函数中，每次实例化都会执行
// function Parent() {
// 	this.names = ['far', 'bar']
// }
// function Child() {
// 	Parent.call(this)
// }
// var child1 = new Child()
// var child2 = new Child()
// child1.names.push('baz')
// console.log(child2.names)

// 组合继承
// 调用2次父构造函数

// 寄生组合
function Parent(name) {
	this.name = name
	this.colors = ['red', 'blue', 'green']
}
Parent.prototype.getName = function() {
	console.log(this.name)
}
function Child(name, age) {
	Parent.call(this, name)
	this.age = age
}

function fn() {}
fn.prototype = Parent.prototype
Child.prototype = new fn()
Child.prototype.constructor = Child

var child1 = new Child('child1', 12)
var child2 = new Child('child2', 13)
child1.colors.push('yellow')
console.log(child1, child2)
