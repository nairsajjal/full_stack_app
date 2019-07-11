import React from 'react';
import axios from 'axios';
import {saveAs} from 'file-saver';

class Form extends React.Component{
state={
    invoiceId: '',
    billFrom: '',
    billTo: '',
    date: '',
    dueDate: '',
    subTotal: '',
    itemNumber: '',
    type: '',
    quantity: '',
    rate: '',
    amount: '',
    discounts: '',
    tax: '',
    shipping: '',
    total: '',
    
   
}
change = e => {
    this.setState({
        [e.target.name]: e.target.value

    });
}

amountUpdate = e=>{
  this.change(e);
  this.setState({amount:(e.target.value)*(this.state.quantity)})
  this.setState({subTotal:(e.target.value)*(this.state.quantity)})
  this.setState({total:(e.target.value)*(this.state.quantity)})
  this.newchange(e);
}
newchange = e=> {
  this.change(e)
  
}
addDiscounts = e=> {
  this.change(e);
  var newTotal = ( ((100*this.state.total)-(this.state.discounts*this.state.total))/100 );

  this.setState({total:newTotal});

}
addTax = e=> {
  this.change(e);
  var total = this.state.total;
  this.setState({total:  ( ((100*total)+(this.state.tax*total))/100 )})
}
addShipping = e =>{
this.change(e);
var oldtotal = this.state.total;


this.setState({total:(oldtotal*1) + (this.state.shipping*1)});

}
createAndDownloadPdf = e => {
  e.preventDefault();
    axios.post('/create-pdf', this.state)
    .then(()=>axios.get('fetch-pdf', {responseType: 'blob'})
    .then((res=>{
      const pdfblob = new Blob([res.data],{type: 'application/pdf'})
    
      saveAs(pdfblob, 'invoice.pdf');
    
    }))
    )
}

render(){
    return (
        <div className="container" style={{marginTop: '10px', marginLeft: '30px', padding: '20px 0px 20px 20px'}}>
        
            <div className="row">
            <div className="col-md-6 col-lg-6">

            <div className="form-group">
            <label>Invoice Id:</label>
            <input name="invoiceId" className="form-control" placeholder='Invoice Id#' value = {this.state.invoiceId} onChange={e => this.change(e)}></input>
            </div>
            <div className="form-group">
          <label>Bill From:</label>
          <textarea  name="billFrom" className="form-control" placeholder="Who is this invoice from? (required)" cols={20} rows={3} style={{resize: 'none'}}
          value = {this.state.billFrom} onChange={e => this.change(e)} />
        </div>
        <div className="form-group">
          <label>Bill To:</label>
          <textarea name ="billTo" className="form-control" placeholder="Who is this invoice to? (required)" cols={20} rows={3} style={{resize: 'none'}}  
          value = {this.state.billTo} onChange={e => this.change(e)}/>
            </div>
            </div>
        <div className="col-md-6 col-lg-6">
            <div className="form-group">
              <label>Date</label>
                <input type="date" className="form-control" name="date" placeholder="Date"
                value = {this.state.date} onChange={e => this.change(e)} />
            </div>
        <div className="form-group">
          <label>Due-Date</label>
          <input type="date" className="form-control" name="dueDate" placeholder="Due-Date"
          value = {this.state.dueDate} onChange={e => this.change(e)} />
        </div>
        <div className="form-group">
          <label>Sub-Total</label>
          <input className="form-control" name="subTotal" placeholder="sub-total" 
          value = {this.state.subTotal} onChange={e => this.change(e)} />
        </div>

            </div>
        <div className="col-12">
        <div>
        <table className="table table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Item-Id</th>
                            <th scope="col">Type</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><input type="number" className="form-control" name="itemNumber" placeholder="Item-Id" value = {this.state.itemNumber} onChange={e => this.change(e)} /></td>
                        <td><input type="text" className="form-control" name="type" placeholder="type" value = {this.state.type} onChange={e => this.change(e)}/></td>
                        <td><input type="number" className="form-control" name="quantity" placeholder="quantity" value = {this.state.quantity} onChange={e => this.change(e)}/></td>
                        <td><input type="number" className="form-control" name="rate" placeholder="rate" value = {this.state.rate} onChange={e => this.amountUpdate(e)}/></td>
                        <td><input type="number" className="form-control" name="amount" placeholder="amount" value = {this.state.amount} onChange={e => this.newchange(e)}/></td>
                        </tr>
                    </tbody>
                    <button className="btn btn-primary" ><i className="fa fa-add" />Add Items</button>
                </table>
            </div>
        </div>

            <div className="col-6 offset-md-6">
          <div className="form-group">
            <label>Discounts</label>
            <input type="number" className="form-control" name="discounts" placeholder="discounts" 
                value = {this.state.discounts} onChange={e => this.addDiscounts(e)}/>
          </div>
          <div className="form-group">
            <label>Tax</label>
            <input type="number" className="form-control" name="tax" placeholder="tax" value = {this.state.tax}   onChange={e => this.change(e)} onBlur={e => this.addTax(e)}/>
          </div>
          <div className="form-group">
            <label>Shipping</label>
            <input type="number" className="form-control" name="shipping" placeholder="shipping" value = {this.state.shipping} onChange={e => this.change(e)} onBlur={e => this.addShipping(e)}/>
          </div>
          <div className="form-group">
            <label>Total</label>
            <input type="number" name="total" className="form-control" placeholder="total" value = {this.state.total} onChange={e => this.change(e)}/>
          </div>
          <div className="form-group">
          <button className="btn btn-primary" onClick={e=> this.createAndDownloadPdf(e)}><i className="fa fa-database" />Create Invoice</button>
        </div>
        </div>
       

            
            </div>
       
       
       
      
        </div>
    );
}


}

export default Form;