const express = require('express');


const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://loko:loki@cluster0.ov1dymx.mongodb.net/').then(() => { console.log('connect')})






const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);