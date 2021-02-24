console.log('start')

const promise = new Promise(resolve => {
	console.log(1)
	resolve(2)
});

(async function () {
	console.log(4)
	const result = await promise
	console.log(result)
	const result1 = await promise
	console.log(result1)
})()

promise.then(() => console.log(3))

console.log('end')