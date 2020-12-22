const blog = require('../models/blog')

const getIndex = (req, res) =>{
    blog.find((err, docs)=>{
        if(err) throw err
        res.render('accueil', {doc: docs})
    })

}

const getReadMore = (req, res) =>{
    const {id} = req.params

    blog.findById(id, (err, docs) =>{
        if(err) throw err
        res.render('readMore', {docs: docs})
    })
  
}

const getDelete = (req, res) =>{
    const {id} = req.params
     blog.findByIdAndDelete(id, (err, docs) =>{
         if(err) throw err
         res.redirect('/')
     })
}

const getUpdate = (req, res) =>{
    const {id} = req.params

    blog.findById(id, (err, docs) =>{
        if(err) throw err
        res.render('modifier', {doc: docs})
    })
}

const postUpdate = (req, res) =>{

    const {id} = req.params
    const {titre_poster, blog_poster} = req.body  
    
    blog.findByIdAndUpdate(id, {titre_poster, blog_poster}, (err, docs)=>{
      if(err) throw err
      res.redirect('/')
    })
   
}


module.exports={
    getIndex: getIndex,
    getReadMore: getReadMore,
    getDelete: getDelete,
    getUpdate: getUpdate,
    postUpdate: postUpdate
}