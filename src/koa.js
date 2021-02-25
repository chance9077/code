const http = require('http')

class Context {
	constructor(req, res) {
		this.req = req
		this.res = res
	}
}

function compose(middlewares) {
	return ctx => {
		const dispatch = i => {
			const middleware = middlewares[i]
			if (i === middlewares.length) {
				return
			}
			return middleware(ctx, () => dispatch[i + 1])
		}
		return dispatch(0)
	}
}

class Application {
	middlewares = []

	listen(...args) {
		const server = http.createServer(async (req, res) => {
			const ctx = new Context(req, res)
			const fn = compose(this.middlewares)
			await fn(ctx)
			ctx.res.end(ctx.body)
		})
		server.listen(...args)
	}

	use(middleware) {
		this.middlewares.push(middleware)
	}
}