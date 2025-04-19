const express=require('express');
const server=express();
const PORT=3000;
const cors=require('cors')
const registerRouter=require('./src/routes/register.js')
const loginRouter=require('./src/routes/login.js')
server.use(cors())
server.use('/register',registerRouter)
server.use('/login',loginRouter)
server.get('/',(req,res)=>{
    res.send('Hello world!')
})

server.listen(PORT,()=>{
    console.log(`Server is running in port: ${PORT}`)
})