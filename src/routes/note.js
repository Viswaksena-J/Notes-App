const express = require('express')
const router = express.Router()

const Note = require('./../modules/note')

router.post('/list',async function(req,res){
    // var notes = await Note.find({userid:req.body.userid}) # If we want to search list by userid uncomment it
    var notes = await Note.find()
    res.json(notes)
    // res.send("Welcome to Notes !!")
})

router.get('/list/:userid',async function(req,res){
    var notes = await Note.find({userid: req.params.userid})
    res.json(notes)
    // res.send("Welcome to Notes !!")
})

router.post('/add',async function(req,res){

    await Note.deleteOne({id:req.body.id}) // While adding this data if it aldready exist it will delete that data and add newer one

    const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content
    })
    await newNote.save()

    const response = { message: "New Note is Created" + 'id: ${req.body.is}'}
    res.json(response)
    // res.send("Welcome to Notes !!")
})

router.post('/delete',async function(req,res){
    await Note.deleteOne({id:req.body.id})

    const response = { message: "Yours requested Note is Deleted " + 'id: ${req.body.is}'}
    res.json(response)
})

module.exports = router