const express = require('express')
const router = express.Router()

router.all('/',(req,res)=>{
    res.json({
       message: "Hi from user router"
    })
})

module.exports=router