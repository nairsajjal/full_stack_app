const functions = require('firebase-functions');
const express = require("express");
const bodyParser = require("body-parser");
const pdf = require('html-pdf');
const cors = require('cors');
const app= express();
const pdfTemplate = require('./documents');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//



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


 exports.app = functions.https.onRequest(app);
