const User = require('../models/user.model.js');
const ApiError = require('../utils/ApiErrors.js');


const CommonHelper = require("../utils/commonHelper.js")





class AdminService {

    addAdmin = async (data) => {

        const existedUser = await User.findOne({ email: data.email })
        if (existedUser) {

            throw new ApiError(400, "This email is already in use.")
        }

        const passwordHash = await CommonHelper.hashPassword(data.password);



        const user = await User.create({
            email: data.email,
            role: "admin",
            password: passwordHash,
            username: data.username,
        })
        return user


    }

    getAllUsers = async (req, res) => {
        const { status, role } = req.query;





        const users = await User.find({ role: 'user', status: 'active' });
        return users;
    }

}

module.exports = new AdminService()
