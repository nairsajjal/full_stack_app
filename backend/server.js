


const express = require("express");
const bodyParser = require("body-parser");
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents');


const API_PORT = 5000;
const app= express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST route for pdf generation
app.post('/create-pdf',(req,res)=> {
    pdf.create(pdfTemplate(req.body), {}).toFile('invoice.pdf', (err)=>{
        if(err){
            res.send("The error occured here"+ Promise.reject());
        }
        res.send(Promise.resolve());
    })
})

//GET request to send the pdf
app.get('/fetch-pdf', (req,res)=>{
    res.sendFile(`${__dirname}/invoice.pdf`);
})


app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

