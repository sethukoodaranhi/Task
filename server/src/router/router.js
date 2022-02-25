const express=require('express')
const logindb=require('../model/login')
const router=express.Router()
router.post('/add',(req,res)=>{
    const data={
        username:req.body.username,
        password:req.body.password
    }
    const logindata=logindb(data)
    logindata.save().then((response)=>{
        console.log(response)
        res.json({
            data:response
        })
    })
})
module.exports=router