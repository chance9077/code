function flat(arr) {
	return arr.reduce((result, item) => {
		Object.prototype.toString.call(item) === '[object Array]' ? result.push(...flat(item)) : result.push(item)
		return result
	}, [])
}

console.log(flat([1, 2, 3, [4, 5, 6, [7, 8, [9]]]]))