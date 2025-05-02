import express from 'express'
const app=express();
const PORT=3000;
import cors from 'cors'
import {Server} from 'socket.io'
import {createServer} from 'node:http'
const server=createServer(app)
const io=new Server(server,{
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})
io.on('connection',(socket)=>{
    console.log('New connection')

    socket.on('disconnect',()=>{
        console.log('User disconnected')
    })
    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg)
    })

})

app.use(cors())
app.get('/',(req,res)=>{
    res.send('Hello world!')
})

server.listen(PORT,()=>{
    console.log(`Server is running in port: ${PORT}`)
})