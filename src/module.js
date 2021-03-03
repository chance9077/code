require.extensions['.jsonp'] = function(module, filename) {
  console.log()
  module.exports = load([1, 2, 3, 4])
}

function load(data) {
  return data
}

const data = require('./far.jsonp')
// console.log('data: ', data)

console.log(require.resolve('fs'))