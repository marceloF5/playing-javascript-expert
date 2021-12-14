const http = require('http')

const routes = {
    '/contact:get': (resquest, response) => {
        response.write('Contact us page')

        return response.end()
    },

    default: (request, response) => {
        response.write('Hello World')

        return response.end()
    }
}

const handler = function(request, response) {
    const { url, method } = request
    const routeKey = `${url}:${method.toLowerCase()}`
    const chosen = routes[routeKey] || routes.default

    response.writeHead(200, {
        'Content-type': 'text/html'
    })
    return chosen(request, response)
}

const app = http.createServer(handler)
                .listen(3000, () => console.log('app running at', 3000))

module.exports = app