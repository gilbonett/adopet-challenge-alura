require('dotenv').config();

module.exports = {
    secret: process.env.AUTH_SECRET || "bonett",
    expires: process.env.AUTH_EXPIRES || "1h",
    rounds: process.env.AUTH_ROUNDS || 8
}
