const express = require('express')
require('dotenv').config()
const app = express()

const apiRouter = require('./api')

// View Engine
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')
// Static files
app.use('/public', express.static('public'))

// Attach api router
app.use('/', apiRouter)

app.get('/', (req, res) => {
	res.redirect('/index')
})


app.get('/index', (req, res) => {
	const lang = req.get('accept-language')
	const user_agent = req.get('user-agent')
	const ip = '"ipadress"'.concat(':').concat('"' + req.ip.toString()+ '"')
	const language = '"language"'.concat(':').concat( '"' + lang.toString() + '"')
	const software  = '"software"'.concat(':').concat( '"' +  user_agent.toString() + '"')
	
	res.render('index', { ip: ip,  lang: language, softw: software } )
})

app.all('*', (req, res) => {
	res.status(404)
	res.render('404')
})

const HOST = process.env['HOST'] || 'localhost';
const PORT = process.env['PORT'] || 8080;

let Server = app.listen(PORT, HOST, () => {
	console.info(`Server listens @  => ${HOST}:${PORT}`)
})
