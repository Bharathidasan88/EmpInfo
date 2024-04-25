`use strict`;
const userController = require('../controllers/user.Master')
module.exports = async function (router) {
    router.get('/create', userController.create)
}