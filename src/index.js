const express = require('express')
require('dotenv').config()
const app = express()

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
	res.send('Hello from microservice')
})

app.get('/index', (req, res) => {
	res.render('index')
})

const HOST = process.env['HOST'] || 'localhost';
const PORT = process.env['PORT'] || 8080;

console.log(`process.env['HOST] : ${process.env['HOST']}`)

let Server = app.listen(PORT, HOST, () => {
	console.info(`Server listens @  => ${HOST}:${PORT}`)
})