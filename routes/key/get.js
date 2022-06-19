const generateKey = require('../../use-cases/generate-key');

module.exports = async function (fastify) {
    const { to, httpErrors, prisma } = fastify;

    await fastify.get(
        '/',
        { schema },
        async () => {
            const [error, response] = await to(generateKey(prisma));

            return error ? httpErrors.internalServerError(error.message) : response
        }
    )
};


const schema = {
    response: {
        200: {
            type: 'object',
            properties: {
                key: { type: 'string' }
            }
        }
    }
};

