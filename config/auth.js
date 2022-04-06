module.exports = {
    secret: process.env.JWT_SECRET || 'secret',
    expiresIn: process.env.AUTH_EXPIRES || '1d',
    rounds: process.env.AUTH_ROUNDS || 10
}