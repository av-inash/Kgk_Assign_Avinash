Welcome to our Real-Time Bidding Platform API project! This README file will guide you through setting up, configuring, and using our API.

Table of Contents
Environment Setup
Database Schema
API Endpoints
Authentication and Authorization
Validation and Error Handling
Image Upload
Search and Filtering
Pagination
Notifications
Project Structure
Testing
Bonus Features

1.Environment Setup

To set up the environment for running the API:
.Install Node.js and npm.
.Clone the project repository from GitHub.
.Run npm install to install dependencies.
.Ensure you have MongoDB installed and running locally or have access to a MongoDB instance

start the project 👍

-npm run dev

2.Database Schema
The MongoDB database schema for this project will follow similar structures to those described in the task, but adapted for MongoDB's document-oriented nature.

Users Collection
\_id: MongoDB generated ObjectId (Primary Key)
username: String, unique, not null
password: String, not null
email: String, unique, not null
role: String, default to 'user' // roles: 'user', 'admin'
created_at: Date, default to current date//use timestams

Items Collection
\_id: MongoDB generated ObjectId (Primary Key)
name: String, not null
description: String, not null
starting_price: Number, not null
current_price: Number, default to starting_price
image_url: String, nullable
end_time: Date, not null
created_at: Date, default to current date //timestamsps

Bids Collection
\_id: MongoDB generated ObjectId (Primary Key)
item_id: Reference to Items Collection
user_id: Reference to Users Collection
bid_amount: Number, not null
created_at: Date, default to current date //use timestamps

Notifications Collection
\_id: MongoDB generated ObjectId (Primary Key)
user_id: Reference to Users Collection
message: String, not null
is_read: Boolean, default to false
created_at: Date, default to current date // use timestamps

API Endpoints
The API endpoints will remain the same as described in the task, with necessary adaptations for MongoDB.

register user: http://localhost:4002/api/v1/users/register
login user: http://localhost:4002/api/v1/users/login
forget-password-http://localhost:4002/api/v1/users/forgetpassword
update-password-http://localhost:4002/api/v1/users/updatePassword
change-password-http://localhost:4002/api/v1/users/changepassword
update-profile-http://localhost:4002/api/v1/users/update-details
upload-image-http://localhost:4002/api/v1/users/upload-image

Admin-
register-admin-http://localhost:4002/api/v1/admin/add-admin
login-http://localhost:4002/api/v1/users/login
get-all-active-user-http://localhost:4002/api/v1/admin/get-all-users-admin

item-
create-item:http://localhost:4002/api/v1/item/create-item
update-item:http://localhost:4002/api/v1/item/update-item
get-item-for-particular-user:http://localhost:4002/api/v1/item/get-item
get-all-item-paginated:http://localhost:4002/api/v1/item/get-Items
delete-item:http://localhost:4002/api/v1/item/delete-item

Bid-
place-bid:http://localhost:4002/api/v1/bid/place-bid
get-bid:http://localhost:4002/api/v1/bid/get-bid

socket-
A folder on src named socket in which there is file name bidSoket.js which contains all logic for socket  
 ..this is working on backend side.

socket events: bidPlaced
socket events:Notification read
