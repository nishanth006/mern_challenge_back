const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://nishi:nishi@cluster0.v0pcshj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    deadline:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

const activity = mongoose.model("activity",newSchema)

module.exports=activity