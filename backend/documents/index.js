

module.exports = ({invoiceId,billFrom,billTo,date,dueDate,subTotal,itemNumber,type,quantity,rate,amount,discounts,tax,shipping,total,}) => {

    return `<html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example 1</title>
      <link rel="stylesheet" href="style.css" media="all" />
      <style>.clearfix:after {
        content: "";
        display: table;
        clear: both;
      }
      
      a {
        color: #5D6975;
        text-decoration: underline;
      }
      
      body {
        max-width: 600px;
        margin: auto;
        padding: 30px;
        border: 1px solid #eee;
        box-shadow: 0 0 10px rgba(0, 0, 0, .15);
        font-size: 16px;
        line-height: 24px;
        font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        color: #555;
      }
      
      header {
        padding: 10px 0;
        margin-bottom: 30px;
      }
      
      #logo {
        text-align: center;
        margin-bottom: 10px;
      }
      
      #logo img {
        width: 90px;
      }
      
      h1 {
        border-top: 1px solid  #5D6975;
        border-bottom: 1px solid  #5D6975;
        color: #5D6975;
        font-size: 2.4em;
        line-height: 1.4em;
        font-weight: normal;
        text-align: center;
        margin: 0 0 20px 0;
        background: url(dimension.png);
      }
      
      #project {
        float: left;
      }
      
      #project span {
        color: #5D6975;
        text-align: right;
        width: 52px;
        margin-right: 10px;
        display: inline-block;
        font-size: 0.8em;
      }
      
      #company {
        float: right;
        text-align: right;
      }
      
      #project div,
      #company div {
        white-space: nowrap;        
      }
      
      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        margin-bottom: 20px;
      }
      
      table tr:nth-child(2n-1) td {
        background: #F5F5F5;
      }
      
      table th,
      table td {
        text-align: center;
      }
      
      table th {
        padding: 5px 20px;
        color: #5D6975;
        border-bottom: 1px solid #C1CED9;
        white-space: nowrap;        
        font-weight: normal;
      }
      
      table .service,
      table .desc {
        text-align: left;
      }
      
      table td {
        padding: 20px;
        text-align: right;
      }
      
      table td.service,
      table td.desc {
        vertical-align: top;
      }
      
      table td.unit,
      table td.qty,
      table td.total {
        font-size: 1.2em;
      }
      
      table td.grand {
        border-top: 1px solid #5D6975;;
      }
      
      #notices .notice {
        color: #5D6975;
        font-size: 1.2em;
      }
      
      footer {
        color: #5D6975;
        width: 100%;
        height: 30px;
        position: absolute;
        bottom: 0;
        border-top: 1px solid #C1CED9;
        padding: 8px 0;
        text-align: center;
      }</style>
    </head>
    <body>
      <header class="clearfix">
        <div id="logo">
          <img src="./CT_logo.png">
        </div>
        <h1>INVOICE# ${invoiceId}</h1>
        <div id="company" class="clearfix">
          <div>CT Solutions</div>
            <div>${billFrom}<br /></div>
          
        </div>
        <div id="project">
          <div><span>PROJECT</span> Website development</div>
          <div><span>CLIENT</span> ${billTo}</div>
          
          <div><span>DATE</span>${date}</div>
          <div><span>DUE</span>${dueDate}</div>
        </div>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th class="service">Item-ID</th>
              <th class="desc">Type</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="service">${itemNumber}</td>
              <td class="desc">${type}</td>
              <td class="unit">${quantity}</td>
              <td class="qty">${rate}</td>
              <td class="total">${amount}</td>
            </tr>
            
            <tr>
              <td colspan="4">SUBTOTAL</td>
              <td class="total">${subTotal}</td>
            </tr>
            <tr>
              <td colspan="4">TAX %</td>
              <td class="total">${tax}</td>
            </tr>
            <tr>
              <td colspan="4">Discount %</td>
              <td class="total">${discounts}</td>
            </tr>
            <tr>
              <td colspan="4">Shipping</td>
              <td class="total">${shipping}</td>
            </tr>
            <tr>
              <td colspan="4" class="grand total">GRAND TOTAL</td>
              <td class="grand total">${total}</td>
            </tr>
          </tbody>
        </table>
        
      </main>
      
    </body>
  </html>`
            
}