const mongoose = require ("mongoose")
const {Schema} = mongoose 
const CarsSchema = require("./Cars")
const UsersChema = require("./User")


const PurchaseSechma = new Schema({
    Products: [CarsSchema],
    Total: Number,
    User:  UsersChema,
    Date: Date
}) 

mongoose.model("purchases",PurchaseSechma)