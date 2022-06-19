const fastifySensible = require('fastify-sensible');

const api = require('./plugins/api');
const shutdown = require('./plugins/shutdown');

module.exports = async function (fastify, opts) {
  fastify
    .register(fastifySensible)
    .register(api)
    .register(shutdown)

}
