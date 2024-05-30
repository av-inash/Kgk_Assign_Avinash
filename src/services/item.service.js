
const ApiError = require('../utils/ApiErrors.js')
const ApiResponse = require('../utils/ApiResponse.js')
const { paginate } = require("../utils/pagination.utils.js")
const Item = require("../models/item.model.js")


class ItemService {
    createItm = async (req, data) => {
        const { user } = req
        if (!user || !user._id) {
            throw new ApiError(400, "user not exist")
        }

        const itemData = await Item.create({
            name: data.name,
            description: data.description,
            userId: user._id,

            startingPrice: data.startingPrice,
            endTime: data.endTime,
            currentPrice: data.currentPrice,
            imageUrl: data.imageUrl

        })
        return itemData


    }
    updateItm = async (req, data) => {
        const { user } = req
        // console.log("ussssssssssrrrs", user._id)
        if (!user || !user._id) {
            throw new ApiError(400, "User not found fot this item")

        }

        const userItem = await Item.findOne({ userId: user._id })
        if (!userItem) {
            throw new ApiError(400, "userItem not found")
        }
        if (data.name) {
            userItem.name = data.name
        }
        if (data.description) {
            userItem.name = data.description
        }
        if (data.startingPrice) {
            userItem.startingPrice = data.startingPrice

        }
        if (data.endTime) {
            userItem.endTime = data.endTime
        }
        if (data.currentPrice) {
            userItem.currentPrice = data.currentPrice
        }


    }
    getItm = async (req, res) => {
        const { user } = req
        if (!user || !user._id) {
            throw new ApiError(400, "user not found for this id")
        }
        const item = await Item.find({ userId: user._id })
        if (!item) {

            throw new ApiError(400, "Item not found for this user")
        }
        return item

    }
    getItms = async (page = 1, limit = 10) => {

        const query = {};
        const result = await paginate(Item, query, page, limit);
        return result;

    };

    deleteItm = async (req, res) => {
        const { user } = req
        console.log("useid", user._id)
        const { itemId } = req.query
        console.log("id", itemId)
        if (!user || !user._id) {
            throw new ApiError(400, "user not found for this id")
        }
        const item = await Item.findOneAndDelete({ _id: itemId, userId: user._id })
        if (!item) {
            throw new ApiError(400, "Item not found")
        }
        return item


    }
}
module.exports = new ItemService()