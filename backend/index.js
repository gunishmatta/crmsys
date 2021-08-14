const express = require('express')
const app = express()
const helmet=require('helmet')
const cors = require('cors')
const morgan = require('morgan')



app.use(helmet())
app.use(cors())
app.use(morgan())

//import router
const userRouter=require('./src/routers/user.router')
const ticketRouter = require('./src/routers/ticket.router')

//use router

app.use('/v1/user/',userRouter)
app.use('/v1/ticket',ticketRouter)

app.use('*',(req,res)=>{
res.status(400).json({error:"Resource not Found"})
})

app.listen(8081,()=>{
    console.log("Running")
})