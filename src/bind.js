var thisArg = (function() {
	return this
})();

Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}

function fn(a, b, c) {
	this.a = a
	this.b = b
	this.c = c
}

var f = fn.bind({val: 1}, 1, 2)

console.log(f(3), new fn(1, 2, 3), new f(3))