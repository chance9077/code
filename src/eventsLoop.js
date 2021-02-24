/**
log-promise1                                                                                                                                                                                             
async start                                                                                                                                                                                              
log-end                                                                                                                                                                                                  
log-promise1-then                                                                                                                                                                                        
promise1                                                                                                                                                                                                 
promise1                                                                                                                                                                                                 
log-timeout                                                                                                                                                                                              
log-setImmediate 
**/
setTimeout(() => {
	console.log('log-timeout')
}, 0)
// setTimeout(() => {
// 	process.nextTick(() => console.log('log-nextTick3'))
// 	console.log('log-timeout2')
// }, 0)

const promise1 = new Promise(resolve => {
	console.log('log-promise1')
	resolve('promise1')
});

// Promise.resolve('promise2').then(() => console.log('promise2-then'))

setImmediate(() => {
	// process.nextTick(() => console.log('log-nextTick4'))
	console.log('log-setImmediate')
}, 0);

// process.nextTick(() => console.log('log-nextTick1'))

(async () => {
	console.log('async start')
	const str = await promise1
	console.log(str)
	const str2 = await promise1
	console.log(str2)
	const str3 = await promise1
	console.log(str3)
	const str4 = await promise1
	console.log(str4)
})()

promise1.then(() => {
	// process.nextTick(() => console.log('log-nextTick2'))
	console.log('log-promise1-then')
})

promise1.then(() => {
	console.log('log-promise1-then2')
})

console.log('log-end')