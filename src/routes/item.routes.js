const express = require("express")
const itemValidation = require("../validations/item.validation.js");
const { upload } = require('../utils/upload.utils.js')

const { createItem, updateItem, getItem, getItems, deleteItem } = require("../controllers/item.controller.js")
const { verifyJwt } = require("../middlewares/auth.middleware.js");

const validate = require("../helpers/validate.js");

const router = express.Router()

router.post("/create-item", validate(itemValidation.createItemm), upload.single('image'), verifyJwt, createItem)
router.put("/update-item", validate(itemValidation.updateItemSchemaa), verifyJwt, updateItem)
router.get("/get-item", verifyJwt, getItem)
router.get("/get-items", verifyJwt, getItems)
router.delete("/delete-item", verifyJwt, deleteItem)
module.exports = router;