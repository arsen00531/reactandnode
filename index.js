const mysql = require('mysql-await')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.listen(PORT)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')))

const connection = mysql.createPool({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'bc7dfc35f765e4',
    password: 'a1fafa45',
    database: 'heroku_d319be7afaea3c7',
})

app.get('/', (req, res) => {
    req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.get('/api', async (req, res) => {
    const posts = await connection.awaitQuery('SELECT * FROM some')
    posts[0].userId = '1'
    res.send(posts)
})

app.get('/api/remove', (req, res) => {
    connection.awaitQuery(`DELETE FROM some WHERE id = ${req.query.id}`)
})