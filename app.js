const express = require('express')
const path = require('path')

const app = express();

app.use(express.static("public"))

app.get(['/', '/hw0.html'], (req, res) => {
  res.sendFile(path.join(__dirname, '/public','hw0.html'))
} )

app.listen(80, () => console.log('server started on port 5000'))
