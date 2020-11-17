const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userAuthenticationSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
})

const Authentication = mongoose.model('Authentication', userAuthenticationSchema)

module.exports = Authentication