const fp = require('fastify-plugin');
const { PrismaClient } = require('@prisma/client');

const metadata = {
    name: 'prisma',
    dependencies: ['fastify-sensible']
}

const register = async (fastify) => {
    fastify.log.info(`Registering ${metadata.name} plugin`);

    const prisma = new PrismaClient();

    const [error] = await fastify.to(prisma.$connect());

    fastify.log.info(PrismaClient);

    if (error) {
        fastify.log.error('Failed to connect to database: \n' + error);
        throw error;
    }

    fastify.decorate('prisma', prisma);
}
module.exports = fp(register, metadata);

