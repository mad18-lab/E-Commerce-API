const express = require('express');
require('./database/mongoose');

const app = express();
app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => {
    console.log('Server is on. Listening on Port ' + port);
})