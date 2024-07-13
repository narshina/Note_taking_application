import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import note from "./Model/Note.js";
mongoose.connect('mongodb://127.0.0.1:27017/Notess')
  .then(() => console.log('Connected!'));

const app=express()
app.use(cors())
app.use(express.json())

app.post('/addnote',async(req,res)=>{
    try{
        console.log(req.body)
        let newnote=new note(req.body)
        console.log(newnote,'new note');
        let response=await newnote.save()
        res.json(response)
        console.log(response)
    }
    catch(e){
        res.json(e.message)
    }
})
app.get('/vnotes',async(req,res)=>{
    let response=await note.find()
    console.log(response)
    res.json(response)
})
app.delete('/delete/:id',async(req,res)=>{
    let id=req.params.id
    let response=await note.findByIdAndDelete(id)
})

app.listen(4000)