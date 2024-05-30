const Notification = require("../models/notification.model")

module.exports = io => {
    io.on('connection', socket => {
        console.log('connected');

        socket.on('bidPlaced', async (bidDetails, userId) => {



            await Notification.create({
                user_id: userId,
                message: `New Bid has been placed`,
                bidDetails: bidDetails,
            });
            return true

        })



        socket.on('notificationRead', async (notificationId, userId) => {



            await Notification.updateOne({
                user_id: userId,
                _id: notificationId

            }, { is_read: true });
            return true



        })



    })
}