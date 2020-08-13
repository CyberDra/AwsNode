const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello , Welcome to AWSNODEJS")
    console.log("Hello World")
})

const port = 4000

app.listen(port ,()=>{
    console.log("Server started on ", port)
})