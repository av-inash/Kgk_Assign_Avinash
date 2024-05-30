const ApiError = require('../utils/ApiErrors')
const ApiResponse = require('../utils/ApiResponse')
const asyncHandler = require('../utils/asyncHandler')

const ItemService = require('../services/item.service')



const createItem = asyncHandler(async (req, res) => {
    try {

        const data = await ItemService.createItm(req, req.body);
        return res.status(200).json(new ApiResponse(200, data, "Item created successfully"))


    } catch (error) {

        if (error instanceof ApiError) {

            return res.status(error.statusCode).json(new ApiResponse(error.statusCode, null, error.message));
        }

        return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
    }


})
const updateItem = asyncHandler(async (req, res) => {
    try {
        const updatedata = await ItemService.updateItm(req, req.body)
        return res.status(200).json(new ApiResponse(200, updatedata, "Item updated successfully"))


    } catch (error) {
        console.error('Error:', error);
        if (error instanceof ApiError) {
            return res.status(error.status).json(new ApiResponse(error.statusCode, null, error.message))
        }
        return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));

    }

})
const getItem = asyncHandler(async (req, res) => {
    try {

        const itemdata = await ItemService.getItm(req)
        return res.status(200).json(new ApiResponse(200, itemdata, "Item of user get successfully"))
    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.status).json(new ApiResponse(error.statusCode, null, error.message))

        }
        return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));

    }

})

const getItems = asyncHandler(async (req, res) => {
    try {

        const { page = 1, limit = 10 } = req.query;
        const itemData = await ItemService.getItms(parseInt(page, 1), parseInt(limit, 10));
        return res.status(200).json(new ApiResponse(200, itemData, "Item of user get successfully"))
    } catch (error) {
        console.log("errorrr", error)
        if (error instanceof ApiError) {
            return res.status(error.status).json(new ApiResponse(error.statusCode, null, error.message))

        }
        return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));

    }

})


const deleteItem = asyncHandler(async (req, res) => {
    try {

        const deleteddata = await ItemService.deleteItm(req,)
        return res.status(200).json(new ApiResponse(200, deleteddata, "Item deleted  successfully"))
    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.status).json(new ApiResponse(error.statusCode, null, error.message))

        }
        return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));

    }

})

module.exports = {
    createItem, updateItem, getItem, getItems, deleteItem
}
