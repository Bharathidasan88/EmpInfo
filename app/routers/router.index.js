`use strict`;

module.exports = function (express) {
    const router = express.Router();
    router.get('/', async function (req, res) {
        try {

            res.status(200).send({ status: 1, message: 'Success' })

        } catch (e) {

            res.status(400).send({ status: 0, message: { e } })

        }
    })
    router.post('/user',require('./userMaster')(router))
}