const { v4: uuidv4 } = require('uuid');


module.exports = async function (prisma) {
    try {
        const key = uuidv4();

        await prisma.user.create({
            data: {
                key
            }
        })

        return { key };
    } catch (e) {
        throw new Error(e);
    }
}