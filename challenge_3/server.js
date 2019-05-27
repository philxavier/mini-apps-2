const express = require('express');
let app = express()
app.use(express.static('public'))
let PORT = 3000


app.listen(PORT, () => {
    console.log('Listening on Port ', PORT)
})





