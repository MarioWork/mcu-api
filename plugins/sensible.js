const fp = require('fastify-plugin')
const fastifySensible = require('fastify-sensible');

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(fastifySensible, {
    errorHandler: false
  })
})
