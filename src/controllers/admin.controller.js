const User = require("../models/user.model")

const asyncHandler = require("../utils/asyncHandler")

const ApiError = require("../utils/ApiErrors");
const ApiResponse = require("../utils/ApiResponse");
const AdminService = require("../services/admin.service")







const addAdmin = asyncHandler(async (req, res) => {
    try {

        const adminregister = await AdminService.addAdmin(req.body)
        return res.status(200).json(new ApiResponse(200, adminregister, "Admin addedd successfully"))

    } catch (error) {

        if (error instanceof ApiError) {

            return res.status(error.statusCode).json(new ApiResponse(error.statusCode, null, error.message));
        }

        return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
    }

})
const GetAllusers = asyncHandler(async (req, res) => {
    try {
        const data = await AdminService.getAllUsers(req)
        return res.status(200).json(new ApiResponse(200, data, "Users get succefully"))

    } catch (error) {
        console.log("error", error)

        if (error instanceof ApiError) {

            return res.status(error.statusCode).json(new ApiResponse(error.statusCode, null, error.message));
        }

        return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
    }
})
module.exports = { addAdmin, GetAllusers }