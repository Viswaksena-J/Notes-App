const express = require('express')
const app = express()

const mongoose = require('mongoose')
const Note = require('./modules/note')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const mongodbPath = 'mongodb+srv://Viswaksena:Viswaksena2004@cluster0.0co8znk.mongodb.net/notesdb'
mongoose.connect(mongodbPath).then(function(){
    app.get('/', function(req,res){
        const response = {message: "API works!!"}
        res.send(response)
    })
    
    const noteRouter = require("./routes/note")
    app.use("/notes",noteRouter)
})
const PORT = process.env.PORT || 8008
app.listen(PORT,function(){
    console.log("Server Connected to port " + PORT)
})
