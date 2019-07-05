require('./models/db');

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const invoiceController = require('./controllers/invoiceController');



const API_PORT = 3001;
const app= express();
const router = express.Router();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

app.use('/invoice',invoiceController);