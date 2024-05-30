const express = require("express");
const cors = require("cors")


const route = require('./routes/user.routes.js');
const adminRoutes = require("./routes/admin.routes.js");
const itemRoutes = require("./routes/item.routes.js")
const bidRoutes = require("./routes/bid.routes.js")


const app = express();
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// User routes
app.use("/api/v1/users", route);
app.use("/api/v1/item", itemRoutes)
app.use("/api/v1/bid", bidRoutes)

// Admin routes
app.use("/api/v1/admin", adminRoutes);




module.exports = app;
