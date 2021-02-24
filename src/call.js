Function.prototype.myCall = function() {
	var context = arguments[0] || global
	var args = []
	for (var i = 1; i < arguments.length; i++) {
		args.push('arguments[' + i + ']')
	}
	context.fn = this
	var result = eval('context.fn(' + args + ')')
	delete context.fn
	return result
}

function fn(a, b) {
	console.log(this.val, a, b)
	return a + b
}

var result = fn.myCall({val: 1}, 2, 3)
console.log(result)