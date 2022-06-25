const generateKey = require('../../use-cases/generate-key');

module.exports = async function (fastify) {
    fastify.get(
        '/',
        {
            schema
        },
        async () => {
            const { to, prisma, httpErrors } = fastify;

            const [error, response] = await to(generateKey(prisma));

            return error ? httpErrors.serviceUnavailable('Something went wrong generating a key.') : response;
        }
    )
}

const schema = {
    response: {
        200: {
            type: 'object',
            properties: {
                key: { type: 'string' }
            }
        }
    }
}

