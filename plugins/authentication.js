const fp = require('fastify-plugin');
const validateKey = require('../use-cases/validate-key');

const metadata = {
    name: 'authentication'
};


const register = async (fastify) => {
    fastify.log.info(`Registering ${metadata.name} plugin`);

    fastify.decorate('authenticate', ({ isAdmin }) => async (request) => {
        const { httpErrors, to, prisma } = fastify;
        const key = request?.headers?.api_key;

        if (!key) {
            throw new httpErrors.badRequest('API key is required in the header');
        }

        const [error] = await to(validateKey(key, prisma, isAdmin));

        if (error) {
            throw new httpErrors.unauthorized('Invalid API key');
        }
    });
}

module.exports = fp(register, metadata);