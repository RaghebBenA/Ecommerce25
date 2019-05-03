const mongoose = require ("mongoose")
const {Schema} = mongoose 
const CarsSchema = require("./Cars")
const UsersChema = require("./User")


const PurchaseSechma = new Schema({
    Products: [CarsSchema],
    Total: Number,
    User:  UsersChema,
    PurchaseDate: Date
}) 

mongoose.model("purchases",PurchaseSechma)