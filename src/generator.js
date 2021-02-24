function task(time, cb) {
	return new Promise(resolve => {
		setTimeout(() => {
			cb()
			resolve()
		}, time)
	})
}

function* taskQueue() {
	yield task(1000, () => console.log(1))
	yield task(2000, () => console.log(2))
	yield task(3000, () => console.log(3))
}

function invokeTaskQueue(generator) {
	generator.next().value.then(() => invokeTaskQueue(generator))
}

invokeTaskQueue(taskQueue())
