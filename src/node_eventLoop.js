console.log(1)

require('fs').readFile('./node_eventLoop.js', undefined, () => {

	process.nextTick(() => console.log(2))

	setTimeout(() => console.log(3))

	process.nextTick(() => console.log(4))

	setImmediate(() => console.log(5))
	
	console.log(111)
})

setImmediate(() => console.log(8))

setTimeout(() => console.log(6))

setImmediate(() => console.log(7))

// 1 6 7 2 4 5 3