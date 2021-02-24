function light(color, duration) {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log(color)
			resolve()
		}, duration)
	})
}

async function walk() {
	await light('red', 3 * 1000)
	await light('green', 2 * 1000)
	await light('blue', 1 * 1000)
	walk()
}

walk()