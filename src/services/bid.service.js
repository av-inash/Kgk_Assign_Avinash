const Bid = require("../models/bid.model")
const Item = require("../models/item.model")
const ApiError = require("../utils/ApiErrors")



class BidService {

    placebid = async (req, data) => {
        const { user } = req
        console.log("userid", user._id.toString())
        const { itemId } = req.query
        console.log("...", itemId)
        if (!user || !user._id) {
            throw new ApiError(400, "user not found")
        }


        const newBid = await Bid.create({
            itemId: itemId,
            userId: user._id.toString(),
            bidAmount: data.bidAmount
        })
        return newBid
    }
    getbid = async (data) => {
        const bids = await Bid.find({ itemId: data.itemId })
        return bids
    }
}
module.exports = new BidService()