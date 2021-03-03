function far() {
	console.log('a run')
	return 1
}

function bar() {
	console.log('b run')
	return 2
}

export const a = far()

export const b = bar()