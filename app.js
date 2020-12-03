const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/api/health', (req, res) => {
	res.send('App Service is UP')
})
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
