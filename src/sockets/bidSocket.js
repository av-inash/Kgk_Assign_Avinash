const Notification = require("../models/notification.model")

module.exports = io => {
    io.on('connection', socket => {
        console.log('connected');

        socket.on('sendMessage', async (message, callback) => {
            const user = getUser(socket.id);


            await Notification.create({
                user_id: user.id,
                message: `You received a new message: ${message}`
            });
            callback()
        })

    })
}