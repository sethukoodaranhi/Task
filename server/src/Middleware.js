const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
// const token=req.headers.authorization.split(" ")[1]
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpZGh1IiwidXNlcmlkIjoiNjIxZjUzZmEyMGE1OTUzMTE1MWQ5MTMwIiwiaWF0IjoxNjQ2MjMyNjU4fQ.NJHhu-Ya9pHJyHIWDpCXLJIGs8EoArytLvR1lFc6-8k'
const[headers,payload,signature]=token.split(".")
console.log("token:::"+token)
const decode=jwt.verify(token,'logindetail')
req.userdata={
    username:decode.username,
    userid:decode.userid
}
console.log('decoded data::'+req.userdata)
next()
}