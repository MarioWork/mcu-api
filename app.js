const fastifySensible = require('fastify-sensible');

const api = require('./plugins/api');
const prisma = require('./plugins/prisma');


module.exports = async function (fastify, opts) {
  fastify
    .register(fastifySensible)
    .register(api)
    .register(prisma)

}
