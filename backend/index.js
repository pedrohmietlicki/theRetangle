const express = require('express');
const app = express();
const cors = require ('cors')

app.use(cors);
let htpp = require('http')
let server = htpp.Server(app);

let socket = require('socket.io')
let io = socket(server);

const port = process.env.PORT || 3000;

io.on('connection',(socket)=>{
    console.log('Usuário Conectado')

    socket.on('new-message',(message)=>{
        console.log(message)
        try {
            
            io.emit('new-message',message)
        } catch (error) {
            console.log(error)
        }
        
    })
})

server.listen(port,()=>{    
    console.log(`Iniciou na porta: ${port}`)
})

