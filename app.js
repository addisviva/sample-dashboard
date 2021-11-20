const express = require('express'),
 app = express()



require('dotenv').config()
app.set('view engine', 'ejs')
 app.use('/api/', require('./routes/hello'))


const port = process.env.port || 3001
app.listen(port, () => {
const url = `http://localhost:${port}/`
console.log(`Example app listening on port ${port}/ ${url}/`)})