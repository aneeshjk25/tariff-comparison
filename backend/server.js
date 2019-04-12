const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./data.json');

app.get('/products', (req, res) => {
    res.json(data);
})

app.listen(port, () => console.log(`App listening on port ${port}!`));
