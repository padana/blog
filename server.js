const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 5050

//MONGOOSE
const DB = require('./controllers/key').MongoURI
mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() =>  console.log('Vous êtes connecté dans BD'))
.catch((err) => console.log(err))


//EJS
app.set('view engine', 'ejs')

//BODY-PARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes

const IndexRouter = require('./routes/index')
const AdminRouter = require('./routes/admin')
app.use('/', IndexRouter)
app.use('/', AdminRouter)



app.listen(port, (req, res)=>{
    console.log('mon port est: ', port);
})