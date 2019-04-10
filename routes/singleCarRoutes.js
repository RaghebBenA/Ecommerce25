const express = require('express')
const bodyParser = require('body-parser')
const mongoose= require('mongoose')
const Cars = mongoose.model('cars')


const CarRoutes = express.Router()

CarRoutes.use(bodyParser.json())


CarRoutes.route("/:carId")
.get(async(req,res)=>{
    
    const car = await Cars.findOne({_id: req.params.carId})
   
    res.send(car)
})
.delete(async(req,res)=>{
    const id = new mongoose.Types.ObjectId(req.params.carId);
    const car = await Cars.findByIdAndDelete(id)

    res.send(car)
})

module.exports = CarRoutes