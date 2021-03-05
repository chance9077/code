function DLinkedNode(key, value) {
	this.key = key
	this.value = value
}

function LRUCache(capacity) {
	this.capacity = capacity
	this.map = new Map()
	this.head = new DLinkedNode()
	this.tail = new DLinkedNode()
	
	this.head.right = this.tail
	this.tail.left = this.head
}

LRUCache.prototype = {
	get(key) {
		let cache = this.map.get(key)
		if (cache === undefined) {
			return -1
		}
		this.removeNode(cache)
		return this.addToHead(cache)
	},
	put(key, value) {
		let cache = this.map.get(key)
		if (cache === undefined) {
			cache = new DLinkedNode(key, value)
			this.map.set(key, cache)
			this.addToHead(cache)

			if (this.map.size > this.capacity) {
				this.map.delete(this.tail.left.key)
				this.removeNode(this.tail.left)
			}
		} else {
			this.removeNode(cache)
			this.addToHead(cache)
		}
	},
	removeNode(node) {
		let { left, right } = node
		left.right = right
		right.left = left
	},
	addToHead(node) {
		let second = this.head.right
		this.head.right = node
		node.right = second
		second.left = node
		node.left = this.head
		return node
	}
}
