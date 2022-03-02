const express = require('express')
const logindb = require('../model/login')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const middleware=require('../Middleware')
const router = express.Router()
router.post('/add',(req,res) => {
    bcryptjs.hash(req.body.password, 10, (err, hashval) => {
        const data = {
            username: req.body.username,
            password: hashval
        }
        const logindata = logindb(data)
        logindata.save().then((response) => {
            console.log(response)
            // res.json({
            //     data: response
            // })
        })

    })
    let fetchuser
    logindb.findOne({ username: req.body.username }).then(async(response) => {
        console.log("fetchuser ::" + response)
        if (!response) {
            res.status(500).send("username note found")
        }
        fetchuser=response
        const pswdcheck=await bcryptjs.compare(req.body.password,response.password)
        if(!pswdcheck){
            res.json({
               message:'password incorrect'
            })
        
        }
        else{
            res.json({
               message:'login successfully',
                data:fetchuser
            })
        }
        
        const id=fetchuser._id
        logindb.findOne({loginid:id}).then((response)=>{
            const token=jwt.sign({username:fetchuser.username,userid:fetchuser._id},'logindetail')
            // console.log(token)
        })
        
    })



})

module.exports = router