const blog = require('../models/blog')


const getAdmin = (req, res) =>{
    res.render('admin')
}

const postAdmin = (req, res) =>{
    const {titre_poster, blog_poster} = req.body

    const blodgSave = new blog({
        titre_poster: titre_poster,
        blog_poster: blog_poster,
    })

    blodgSave.save((err, docs) =>{
        if(err) throw err
        res.redirect('/')
    })


}

module.exports={
    getAdmin: getAdmin,
    postAdmin: postAdmin
}