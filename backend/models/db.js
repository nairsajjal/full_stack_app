const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/FullStackDB', {useNewUrlParser: true} ,(err)=> {
    if(!err) { console.log("Mongodb Connected here")}
    else{console.log("Connection failed" + err)}

});

require('./invoice.model');