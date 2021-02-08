const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const CourseModel = mongoose.model('Courses');
router.get('/', (req, res) => {
    res.send('courses controllers');
})
router.get('/list', (req, res) => {
//Setting
// var course = new CourseModel();
// course.coursename = "nodee";
// course.courseId = "1";
// course.courseDuration = "1sec";
// course.courseFee= "10000";
// course.save();
    CourseModel.find((err,docs)=>{
        if(!err){
            console.log('documents',docs);
            // res.send('courses controllers list');
            res.render("list",{data:docs});
            // res.render(docs);

        }else{
            res.send("Error");
        }
    });
})
router.get('/add',(req,res)=>{
    // res.sendFile('/home/afazaambrin/Desktop/POC/views/layouts/addcourse.html')
    res.render('addcourse');

})
router.post('/add',(req,res)=>{
    var course = new CourseModel();
course.coursename = req.body.coursename;
course.courseId = Math.cell(Math.random()*10000)+"";
course.courseDuration = req.body.courseDuration;
course.courseFee= req.body.courseFee;
course.save((err,docs)=>{
if(!err){
res.redirect("/courses/list");
}else{
res.send("Eroor Ocurred");
}
});
    // res.render('addcourse');

    // res.send("hhhhhhhhh");
})
module.exports = router;