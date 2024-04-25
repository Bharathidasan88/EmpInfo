`use strict`;
const userModel = require('../models/userMaster')
const message = require('../const/appKey').message
module.exports = Object.freeze({
    create: async function (req, res) {
        try {
            const { id, name, age, gender, email, password, phone, address, city, state, country } = req.body;
            const userData = { id, name, age, gender, email, password, phone, address, city, state, country }
            const { error, data } = await userModel.userCreate({ userData })
            if (error) throw error
            res.status(201).json({ status: 1, message: message.userCreated })
        } catch (e) {
            res.status(400).json({ status: 0, message: e.message})
        }
    }
})