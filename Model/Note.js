import mongoose from "mongoose";

const noteschema=new mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    instructions:{
        type:String
    }
})
const note=mongoose.model("note",noteschema)
export default note