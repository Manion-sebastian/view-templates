const { render } = require('ejs');
const express = require('express')
const app = express()
app.set('view engine', 'ejs');
const PORT = 3000
const favThings = ['food', 'language', 'rain', 'cold'] 
app.listen(PORT, ()=> {
    console.log(`detected in sector ${PORT}`)
})

app.get('/', (req, res)=> {
    res.render('index')
})

app.get('/about', (req, res)=> {

    res.render('about', {favThings})
})

app.get('/blog', (req, res)=> {
    res.render('blog-directory')
})