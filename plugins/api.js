const path = require('path')
const fp = require('fastify-plugin')
const fastifyAutoload = require('fastify-autoload')

const metadata = {
    name: 'api'
}

const register = async function (fastify) {
    fastify.log.info(`Registering ${metadata.name} plugin`);

    await fastify.register(fastifyAutoload, {
        dir: path.join(process.cwd(), 'routes'),
        options: { prefix: '/api' },
        routeParams: true
    });
}

module.exports = fp(register, metadata)