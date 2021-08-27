const router = require('express').Router()


router.get('/api/whoami', (req, res) => {
	const lang = req.get('accept-language')
	const user_agent = req.get('user-agent')
	res.json({
		"ipaddress": req.ip,
		"language": lang,
		"software" : user_agent
	})
})


module.exports = router