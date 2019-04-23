const mongoose = require("mongoose")
const Purchase = mongoose.model("purchases")
const requireLogin = require("../middelware/requireLogin")

module.exports = (app) =>{
    app.get("/api/purchase",async (req,res)=>{
        const list = await Purchase.find({})
        res.send(list)
    })

    app.post("/api/purchase",async(req,res,done)=>{
        const {Products, Total} = req.body
        const list = new Purchase({
            Products,
            Total,
            User: req.user,
            Date: Date.now()
        })
        try{
            const save = list.save()
            res.send(save)
            done(null,save)
        }catch(err){
           res.status(404).send(err)
        }
    })
}

