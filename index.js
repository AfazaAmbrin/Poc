const connection = require("./models");
const express = require('express');
const app = express();
const path = require('path');
const expresshandlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const courseControllers = require("/home/afazaambrin/Desktop/POC/controllers/courses.js")
app.use(bodyparser.urlencoded({
    extended:true
}));
app.set("views",path.join(__dirname,"/views/"));
app.engine('hbs',expresshandlebars({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutsDir:__dirname+"/views/layouts"
}))
app.set("view engine","hbs");
app.listen("8091",()=>{
    console.log('server started');
})
app.get('/',(req,res)=>{
    // res.send('<p>Helloo World');
    res.render("index",{})
})
app.use(express.static(path.join(__dirname, 'public')));
app.use("/courses",courseControllers);