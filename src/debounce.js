function debounce(fn, delay) {
	let t, first
	return function() {
		console.log('setInterval')
		let args = arguments, context = this
		if (!first) {
			first = true
			return fn.apply(context, args)
		}
		t && clearTimeout(t)
		t = setTimeout(function() {
			fn.apply(context, args)
		}, delay)
	}
}

const fn = debounce(function() {
	console.log('fn')
}, 2000)
const poll = setInterval(fn, 300)

setTimeout(() => clearInterval(poll), 10 * 1000)