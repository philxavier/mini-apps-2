let express = require('express');
let app = express();
let port = 3002;
let rp = require('request-promise')
let bodyParser = require('body-parser');
let morgan = require('morgan')

app.use(express.static('./public'))
app.use(morgan('dev'))
app.use(bodyParser.json());

app.listen(port, () =>
    console.log('App listening on port 3002!'),
);

app.get('/prices', (req, res) => {
    console.log('the request is here')
    rp.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-04-01&end=2019-04-30')
        .then((data) => {
            console.log('this is data', data)
            res.send(data);
        })
        .catch((err) => {
            console.log('there was an error', err)
            res.send.status(404)
        })
})