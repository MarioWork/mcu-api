const fp = require('fastify-plugin');
const { PrismaClient } = require('@prisma/client');

const metadata = {
    name: 'prisma'
}

const register = async (fastify) => {
    fastify.log.info(`Registering ${metadata.name} plugin`);

    const prisma = new PrismaClient();

    try {
        await prisma.$connect();
    } catch (error) {
        fastify.log.info('Failed to connect to database: \n' + error);
        throw error;
    }

    fastify.decorate('prisma', prisma);
}
module.exports = fp(register, metadata);

