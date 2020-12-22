const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    titre_poster:{
       type: String,
       required: true
    },

    blog_poster:{
        type: String,
       required: true
    },

    // date:{
    //     type: Date,
    //     default: Date.now()
    // }
})

const blog = mongoose.model('blog', blogSchema)

module.exports = blog