module.exports = ({invoiceId,billFrom,billTo,date,dueDate,subTotal,itemNumber,type,quantity,rate,amount,discounts,tax,shipping,total,}) => {

    return ` <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>A simple, clean, and responsive HTML invoice template</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <style>
        body{
            max-width: 800px;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color: #555;
        }
        
        
        
        /** RTL **/
        .rtl {
            direction: rtl;
            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        }
        
        .rtl table {
            text-align: right;
        }
        
        .rtl table tr td:nth-child(2) {
            text-align: left;
        }
        </style>
    </head>
    
    <body>
    <div class="container">
    <div class="row">
    <div class="col-4">
      <img src="CT_logo.png" style="width:80%; max-width:120px;">
       </div>
    <div class="col-4 offset-4">
                                <p style="padding-top:10px;">
                                    Invoice #: 123<br>
                                    Created: January 1, 2015<br>
                                    Due: February 1, 2015
                             </p>
      
      </div>
    <div class="col-6" style="padding-top:10px;">
    
                       <p>
                                    Sparksuite, Inc.<br>
                                    12345 Sunny Road<br>
                                    Sunnyville, CA 12345
                               </p>
    </div>     
        
    <div class="col-6">        
                                <p style="padding-left:122px;">
                                    Acme Corp.<br>
                                    John Doe<br>
                                    john@example.com
                                </p>
     </div>  
     </div>
    
    
        
               </div>
                <table class="table table-striped table-bordered">
                <thead class="thead-dark">
            <tr>                
            <th>
                        Item-Id
                    </th>
                    <th>
                        Type
                    </th>
            <th>
                        Quantity
                    </th>
                    <th>
                        Rate
                    </th>
            <th>
                        Amount
                    </th>
            </tr>
                </thead>
                <tbody>
    
                <tr>
                   <td>101</td>
               <td>Games</td>
               <td>10</td>
            <td>100</td>
            <td>1000</td>
                </tr>
             
        </tbody>
            </table>
        <div class="container">
        <div class="row">
        <div class="col-6 offset-md-6">
        <p>Discounts:</p>
        <p>Tax:</p>
        <p>Shipping:</p>
        <p>Gross Total:</p>
        </div>	
        </div>	
        </div>
        </div>
    </body>
    </html>
            `
}