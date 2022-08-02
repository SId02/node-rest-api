const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var cors = require('cors');
const apiData = require('./data.json');
app.use(cors())
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })


app.get('/ipl_info', (req, res) => {
    res.send(apiData);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})