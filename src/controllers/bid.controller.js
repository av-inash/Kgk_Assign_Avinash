const ApiError = require('../utils/ApiErrors')
const ApiResponse = require('../utils/ApiResponse')
const asyncHandler = require('../utils/asyncHandler')

const BidService = require('../services/bid.service')



const placeBid = asyncHandler(async (req, res) => {
    try {

        const data = await BidService.placebid(req, req.body);
        return res.status(200).json(new ApiResponse(200, data, "place bid successfully"))


    } catch (error) {

        if (error instanceof ApiError) {

            return res.status(error.statusCode).json(new ApiResponse(error.statusCode, null, error.message));
        }

        return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
    }


})
const getBid = asyncHandler(async (req, res) => {
    try {
        const Bids = await BidService.getbid(req.body)
        return res.status(200).json(new ApiResponse(200, Bids, "get bids  successfully"))


    } catch (error) {
        console.log("error", error)
        if (error instanceof ApiError) {
            return res.status(error.status).json(new ApiResponse(error.statusCode, null, error.message))
        }
        return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));

    }

})
module.exports = {
    placeBid, getBid
}
