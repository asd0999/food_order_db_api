
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: { type: String },
    phoneNumber: { type: Number },
    order: [{
        type: Schema.Types.ObjectId,
        ref: "Order",
    }, ],
})

const User = mongoose.model('User', userSchema)

module.exports = User
