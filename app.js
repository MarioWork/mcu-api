const fastifySensible = require('fastify-sensible');

const authentication = require('./plugins/authentication');
const api = require('./plugins/api');
const prisma = require('./plugins/prisma');
const shutdown = require('./plugins/shutdown');

module.exports = async function (fastify, opts) {
  fastify
    .register(authentication)
    .register(fastifySensible)
    .register(api)
    .register(prisma)
    .register(shutdown)
}
