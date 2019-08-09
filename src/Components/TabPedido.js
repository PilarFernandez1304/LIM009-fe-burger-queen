import React from 'react';

const TabPedido=()=>{
    return(
        <table className="table table-hover containerProduct" >
  <thead>
    <tr className="table-active">
      <th scope="col">Productos</th>
      <th scope="col">Precios</th>
    </tr>
  </thead>
  <tbody>
    <tr className="table-primary">
      <th scope="row">Active</th>
      <td>Column content</td>
     
    </tr>
    <tr>
      <th scope="row">Default</th>
      <td>Column content</td>
      
    </tr>
    <tr className="table-primary">
      <th scope="row">Primary</th>
      <td>Column content</td>
      
    </tr>
    <tr className="table-secondary">
      <th scope="row">Secondary</th>
      <td>Column content</td>
     
    </tr>
    
  </tbody>
</table> 
     
    )
}

export default TabPedido;