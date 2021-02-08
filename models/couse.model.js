const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    coursename: {
        type: String,

    },

    courseId: {
        type: String,

    },
    courseDuration: {
        type: String,

    },
    courseFee: {
        type: String,

    },
})
mongoose.model('Courses', courseSchema);