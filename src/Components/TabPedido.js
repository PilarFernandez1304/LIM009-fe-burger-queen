import React from 'react';

const TabPedido=(props)=>{
    return(
  <table  className="table table-hover containerProduct" >
          
  <thead>    
    <tr className="table-active">
      <th scope="col">Productos</th>
      <th scope="col">Precios</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody >
    {
      props.fillOrder.map((res,index)=>(
      <tr key={index} className="table-primary">      
      <th scope="row">{res.Producto}</th>
      <td>{res.Precio}</td>
      <th scope="row">X</th>
    </tr>   
      ))     
    }      
  </tbody>
</table> 
     
    )
}

export default TabPedido;