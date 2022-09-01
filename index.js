const express = require('express')
const app = express()
const PORT = 3000

app.listen(PORT, ()=> {
    console.log(`detected in sector ${PORT}`)
})

app.get('/', (req, res)=> {
   res.send('Welcome to the Home page!') 
})

app.get('/about', (req, res)=> {
   res.send('Welcome to the About page!') 
})

app.get('/blog', (req, res)=> {
   res.send('Welcome to the Blog page!') 
})