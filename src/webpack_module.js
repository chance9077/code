(function(modules) {
	var installedModules = {}

	function require(moduleName) {
		if (installedModules[moduleName]) {
			return installedModules[moduleName].exports
		}
		var module = installedModules[moduleName] = {
			exports: {}
		}
		modules[moduleName](module, module.exports, require)
		return module.exports
	}

	require._d = function(exports,  definition) {
		for (var key in definition) {
			Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
		}
	}

	return require('main')
})({
	"main": function(module, exports, require) {
		const foo = require('./foo')

		console.log(foo.counter, (foo.incCounter(), foo.counter))
	},
	"./foo": function(module, exports, require) {
		let counter = 1
		function incCounter() {
			counter++
		}
		function getCounter() {
			return counter
		}
		module.exports = {
			counter,
			incCounter
		}
		// require._d(module.exports, {
		// 	counter: () => counter,
		// 	incCounter: () => incCounter,
		// 	getCounter: () => getCounter
		// })
	}
})