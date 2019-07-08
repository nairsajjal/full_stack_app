import React, { Component } from 'react'

class Table extends Component {
    addRow(){
       
             return (<tr>
                            
            <th scope="row"><input type="number" className="form-control" name="itemsId" placeholder="Item-Id" /></th>
            <td><input type="text" className="form-control" name="type" placeholder="type" /></td>
            <td><input type="number" className="form-control" name="quantity" placeholder="quantity" /></td>
            <td><input type="number" className="form-control" name="price" placeholder="price" /></td>
            <td><input type="number" className="form-control" name="amount" placeholder="amount" /></td>
            
        </tr>);
    }
    render() {
        return (
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
                            
                            <th scope="row"><input type="number" className="form-control" name="itemsId" placeholder="Item-Id" /></th>
                            <td><input type="text" className="form-control" name="type" placeholder="type" /></td>
                            <td><input type="number" className="form-control" name="quantity" placeholder="quantity" /></td>
                            <td><input type="number" className="form-control" name="price" placeholder="price" /></td>
                            <td><input type="number" className="form-control" name="amount" placeholder="amount" /></td>
                            
                        </tr>
                        
                    </tbody>
                    
                </table>
                <button className="btn btn-primary" onClick={()=> this.addRow()} name="add_items"><i className="fa fa-plus" aria-hidden="true" />Add Items</button>
            </div>
        )
    }
}
export default Table;