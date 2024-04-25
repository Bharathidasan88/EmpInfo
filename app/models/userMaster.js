const db = require('../db/config')
module.exports = Object.freeze({
    userCreate: async ({ userData }) => {
        try {
            const user = await db.userMaster.create(userData)
            return { error: false, data: user }
        } catch (err) {
            return { error: true, data: err }
        }

    }
})