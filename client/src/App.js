import React from 'react';
import Form from './Form';
function PageHeader(){
  return <h1 className="page-header" style={{marginLeft: '50px', marginTop: '50px'}}>INVOICES GENERATOR</h1>
}


class App extends React.Component{
  render() {
    return(
    <div className="App">
      <PageHeader />
      <Form />
    </div>
    )
  
  }
};

export default App;
