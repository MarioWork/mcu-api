module.exports = async function (fastify) {
    fastify.get(
        '/',
        {
            schema
        },
        async (request, reply) => {
            reply.code(200).send({
                text: 'hello world',
            })
        }
    )
}

const schema = {
    response: {
        200: {
            type: 'object',
            properties: {
                text: { type: 'string' }
            }
        }
    }
}