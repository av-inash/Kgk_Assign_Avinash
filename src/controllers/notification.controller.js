const Notification = require("../models/notification.model")
const asyncHandler = require("../utils/asyncHandler")
const ApiError = require('../utils/ApiErrors')
const ApiResponse = require('../utils/ApiResponse')

const getNotification = asyncHandler(async (req, res) => {

    try {
        const { user } = req
        if (!user || !user._id) {
            throw new ApiError(400, "user not found")
        }
        const notifications = await Notification.find({ userId: user._id })
        return res.status(200).json(new ApiResponse(200, notifications, "notification get successfully"))

    } catch (error) {
        throw new ApiError(400, "Something went wrong", error.message)

    }
})
module.exports = {
    getNotification
}