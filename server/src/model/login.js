const mongoose=require('mongoose')
const Schema=new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    
    
})
const logindb=mongoose.model('logindb',Schema)
module.exports=logindb