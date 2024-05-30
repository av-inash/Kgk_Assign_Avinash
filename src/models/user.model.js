const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema(

    {
        username: {
            type: String,
            unique: true,
            required: true
        },

        email: {
            type: String,
            unique: true,
            required: true
        },

        password: {
            type: String,
            required: true
        },

        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },

        otp: {
            type: String,
            default: null
        },
        otpCreatedAt: {
            type: Date,
            default: null
        },
        status: {
            type: String,
            enum: ['active', 'ended'],
            default: "ended"

        }





    }, { timestamps: true }
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password"))
        return next()


})


const User = mongoose.model("User", userSchema)

module.exports = User;