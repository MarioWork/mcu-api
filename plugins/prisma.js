const fp = require('fastify-plugin');
const { PrismaClient } = require('@prisma/client');

const metadata = {
<<<<<<< HEAD
    name: 'prisma',
    dependencies: ['fastify-sensible']
=======
    name: 'prisma'
>>>>>>> master
}

const register = async (fastify) => {
    fastify.log.info(`Registering ${metadata.name} plugin`);

    const prisma = new PrismaClient();

<<<<<<< HEAD
    const [error] = await fastify.to(prisma.$connect());

    if (error) {
        fastify.log.info('Failed to connect to database: \n' + error);
=======
    try {
        await prisma.$connect();
    } catch (error) {
        fastify.log.info('Failed to connect to database: \n' + error);
        throw error;
>>>>>>> master
    }

    fastify.decorate('prisma', prisma);
}
module.exports = fp(register, metadata);

