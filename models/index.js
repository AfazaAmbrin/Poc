const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://afambrin:Gemini@123@cluster0.04zcl.mongodb.net/star-wars-quotes?retryWrites=true&w=majority",{useNewUrlParser:true},
(err)=>{
if(!err){
    console.log('databse connected');
}else{
    console.log('error occured');
}
});
const course = require("/home/afazaambrin/Desktop/POC/models/couse.model.js");