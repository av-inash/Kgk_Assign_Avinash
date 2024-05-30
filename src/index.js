const dotenv = require("dotenv");
const connectDB = require("./db/index.js");
const app = require('./app.js');
const socketio = require("socket.io")
const http = require('http')

const bidsocket = require("../src/sockets/bidSocket.js")


dotenv.config();
const server = http.createServer(app)
const io = socketio(server)
bidsocket(io)


connectDB()
    .then(() => {
        // Use the http server instance to listen on the port
        server.listen(process.env.PORT || 4002, () => {
            console.log(`server is running at port : ${process.env.PORT || 4000}`);
        });
    })
    .catch((err) => {
        console.log("Mongodb connection failed !!", err);
    });