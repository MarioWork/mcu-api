const fp = require('fastify-plugin');

const EVENTS = ['SIGINT', 'SIGTERM'];

const metadata = {
    name: 'shutdown'
};

const register = async function (fastify) {
    fastify.log.info(`Registering ${metadata.name} plugin`);

    EVENTS.forEach(event => {
        process.once(event, async () => {
            fastify.log.info('Shutting down server...');

            const promises = await Promise.allSettled([
                fastify.prisma.$disconnect(),
                fastify.close()
            ]);

            promises
                .filter(({ status }) => status === 'rejected')
                .forEach(({ reason }) => {
                    fastify.log.error(reason, 'Failed to shut down');
                });
        });
    });
};

module.exports = fp(register, metadata);