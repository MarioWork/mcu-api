const fp = required('fastify-plugin');
const { PrismaClient } = require('prisma-client');

const metadata = {
    name: 'prisma'
}

const register = async (fastify) => {
    fastify.log.info(`Registering ${metadata.name} plugin`);

    const prisma = new PrismaClient();

    const [error] = await fastify.to(prisma.$connect());

    if (error) {
        fastify.log.info(error, 'Failed to connect to database');
        throw error;
    }

    fastify.decorate('prisma', prisma);
}
module.exports = fp(register, metadata);

