const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Invoice = mongoose.model('Invoice');

router.get('/', (req,res)=> {
    res.render(
    );
});

router.post('/',(req,res)=>{
   insertRecord(req,res);
} );




function insertRecord(req, res){
    var invoice = new Invoice();
    invoice.invoice_number= req.body.invoice_number;
    invoice.invoice_from= req.body.invoice_from;
    invoice.invoice_to= req.body.invoice_to;
    invoice.date = req.body.date;
    invoice.due_date = req.body.due_date;
    invoice.sub_total = req.body.sub_total;
    invoice.discounts = req.body.discounts;
    invoice.tax = req.body.tax;
    invoice.shipping = req.body.shipping;
    invoice.total = req.body.total;
    invoice.items_id = req.body.items_id;
    invoice.types = req.body.types;
    invoice.quantity = req.body.quantity;
    invoice.amount = req.body.amount;
    invoice.price = req.body.price;
    invoice.save((err,doc) => {
        if(!err)
            res.redirect('/invoice/list');
        else{
            if(err.name=='ValidationError'){
                handleValidationError(err, req.body);
                res.render("invoice/addOrEdit",{
                    viewTitle: "Add Invoices",
                    invoice: req.body
                });

            }
            else{
                console.log('Error during record insertion: ' +err);
            }
            
        }       
    })
}
router.get('/list',(req,res)=>{
   
    Invoice.find((err,docs)=>{
        if(!err){
            res.render("invoice/list",{
                list: docs
            })
        }
        else{
            console.log("error in retrieving the records"+ err);
        }
    });
    
    
});
function handleValidationError(err, body){
    for(field in err.errors){
        switch(err.errors[field].path){
            case 'invoice_number':
                body['invoice_numberError'] = err.errors[field].message;
                break;
            case 'invoice_from':
                body['invoice_fromError'] = err.errors[field].message;
                break;
            case 'invoice_to':
                body['invoice_toError'] = err.errors[field].message;
                break;
            case 'sub_total':
                body['sub_totalError'] = err.errors[field].message;
                break;
            case 'items_id':
                body['items_idError'] = err.errors[field].message;
                break;
            case 'items_type':
                body['items_typeError'] = err.errors[field].message;
                break;
            case 'items_quantity':
                body['items_quantityError'] = err.errors[field].message;
                break;
            case 'items_price':
                body['items_priceError'] = err.errors[field].message;
                break;
            case 'items_amount':
                body['items_amountError'] = err.errors[field].message;
                break;
            case 'items_total':
                body['items_totalError'] = err.errors[field].message;
                break;
            default: 
                break;
        }
    }
}
module.exports = router;