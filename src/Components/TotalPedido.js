import React from 'react';

const TotalPedido=(props)=>{
    return (
        <table className="table table-hover" >
    <thead>    
    <tr className="table-active">
      <th scope="col">Total:</th>
      <th scope="col">{props.totalOrder(props.precios)}</th>
    </tr>
  </thead>
     </table>
    )

}

export default TotalPedido;