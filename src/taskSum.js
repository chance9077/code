function taskSum(time, callback) {
	const taskQueue = [[time, callback]]
	const invokeTask = function() {
		let [t, cb] = taskQueue.slice().shift()
		setTimeout(() => {
			taskQueue.shift()
			cb()
			taskQueue.length && invokeTask()
		}, t)
	}
	taskSum.task = function() {
		taskQueue.push([arguments[0], arguments[1]])
		if (taskQueue.length === 1) invokeTask()
		return taskSum
	}
	invokeTask()
	return taskSum
}

taskSum(1000, () => console.log(1))
	.task(2000, () => console.log(2))
	.task(3000, () => console.log(3))