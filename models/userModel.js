const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userAuthenticationSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: { type: String },
    phoneNumber: { type: Number },
    order: [{
        type: Schema.Types.ObjectId,
        ref: "Order",
    }, ],
})

const Authentication = mongoose.model('Authentication', userAuthenticationSchema)

module.exports = Authentication