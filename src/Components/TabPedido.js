import React from 'react';

const TabPedido=(props)=>{
    return(
        <table  className="table table-hover containerProduct" >
          
  <thead>    
    <tr className="table-active">
      <th scope="col">Productos</th>
      <th scope="col">Precios</th>
    </tr>
  </thead>
  <tbody>
    {
      props.fillOrder.map((res)=>(
        <tr className="table-primary">
      <th scope="row">{res.Producto}</th>
      <td>{res.Precio}</td>
     
    </tr>
      ))
    }    
  </tbody>
</table> 
     
    )
}

export default TabPedido;