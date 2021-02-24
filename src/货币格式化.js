// 1,234,567,890.24
var str = '1234567890.235'

function format(money) {
	money = Math.round(money * 100) / 100
	money = String(money).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	console.log(money)
	return money
}

format(str)
format(1234567890)