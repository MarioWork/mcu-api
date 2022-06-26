module.exports = async function (key, prisma, isAdmin) {
    try {
        await prisma.user.findFirst({
            where: {
                key,
                isAdmin
            },
            rejectOnNotFound: error => error
        })
    } catch (e) {
        throw e;
    }
}