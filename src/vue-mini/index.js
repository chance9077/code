class Dep {
	constructor() {
		Dep.target = null
		this.subs = new Set()
	}
	addSub(sub) {
		this.subs.add(sub)
	}
	depend() {
		Dep.target && Dep.target.addDep(this)
	}
	notify() {
		this.subs.forEach(watcher => watcher.update())
	}
}

class Watcher {
	constructor(cb) {
		this.cb = cb
		this.update()
	}
	addDep(dep) {
		dep.addSub(this)
	}
	update() {
		Dep.target = this
		this.cb()
		Dep.target = null
	}
}

function observe(obj) {
	Object.keys(obj).forEach(key => {
		let value = obj[key]
		let dep = new Dep()
		Object.defineProperty(obj, key, {
			enumerable: true,
			configurable: true,
			get: function() {
				if (Dep.target) {
					dep.depend()
				}
				return value
			},
			set: function(newVal) {
				value = newVal
				dep.notify()
			}
		})
	})
}

const state = {
	counter: 0
}

observe(state)

new Watcher(function render() {
	console.log(state.counter)
})

state.counter++
state.counter++
state.counter++
