const express = require('express');
const usersRoute = require('./routes/users');
const itemsRoute = require('./routes/items');
const cartRoute = require('./routes/cart');
require('./database/mongoose');

const app = express();
app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => {
    console.log('Server is on. Listening on Port ' + port);
})