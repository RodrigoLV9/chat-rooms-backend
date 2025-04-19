const express= require('express');
const registerRouter=express.Router();
registerRouter.get('/',(req,res)=>{
    res.send('Page Register')
})
module.exports=registerRouter