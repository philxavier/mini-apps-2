let express = require('express');
let app = express();
let port = 3002

app.use(express.static('./public'))

app.listen(port, () =>
    console.log('Example app listening on port 3002!'),
);