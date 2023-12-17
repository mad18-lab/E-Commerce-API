const express = require('express');
const usersRoute = require('./routes/users');
const itemsRoute = require('./routes/items');
const cartRoute = require('./routes/cart');
const ordersRoute = require('./routes/orders');
require('./database/mongoose');

const app = express();
app.use(express.json());
app.use(usersRoute);
app.use(itemsRoute);
app.use(cartRoute);
app.use(ordersRoute);

const port = process.env.PORT;
app.listen(port, () => {
    console.log('Server is on. Listening on Port ' + port);
})