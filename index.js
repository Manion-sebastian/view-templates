const { render } = require('ejs');
const express = require('express')
const app = express()
app.set('view engine', 'ejs');
const PORT = 3000

app.listen(PORT, ()=> {
    console.log(`detected in sector ${PORT}`)
})

app.get('/', (req, res)=> {
    res.render('index', {name: "Sterling Archer", age: 35})
})

app.get('/about', (req, res)=> {

    res.render('about')
})

app.get('/blog', (req, res)=> {
    res.render('blog-directory')
})