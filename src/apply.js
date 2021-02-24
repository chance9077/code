function fn(a, b, c) {
	console.log(this.val, a, b, c)
	return 3
}

console.log(fn.apply({val: 1}, [1, 2, 3]))