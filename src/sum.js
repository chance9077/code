// function sum(x) {
// 	if (sum.total === undefined) {
// 		sum.total = 0
// 		sum.valueOf = function() {
// 			return this.total
// 		}
// 	}
// 	sum.total += x
// 	return sum
// }

function sum(total) {
	let add = function(x) {
		total += x
		return add
	}
	add.valueOf = function() {
		return total
	}
	return add
}

console.log(sum(1)(2)(3).valueOf())