function shuffle(arr) {
	let m = arr.length
	while(m > 1) {
		let index = Math.floor(Math.random() * m--);
		[arr[m], arr[index]] = [arr[index], arr[m]]
	}
	return arr
}

// function shuffle(arr) {
//     let m = arr.length;
//     while (m > 1){
//         let index = Math.floor(Math.random() * m--);
//         [arr[m], arr[index]] = [arr[index], arr[m]]
//     }
//     return arr;
// }

var arr = [1,2,3,4,5,6,7,8]

console.log(shuffle(arr))
console.log(shuffle(arr))
console.log(shuffle(arr))
console.log(shuffle(arr))
console.log(shuffle(arr))
console.log(shuffle(arr))