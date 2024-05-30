const express = require("express")

const { placeBid, getBid } = require("../controllers/bid.controller.js")
const { verifyJwt } = require("../middlewares/auth.middleware.js");



const router = express.Router()

router.post("/place-bid", verifyJwt, placeBid)
router.get("/get-bid", getBid)

module.exports = router;