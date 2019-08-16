import React from "react";

const BtnCargaPedido = (props) => {
  return(
    <button type="button" className="btn btn-primary btn-lg" onClick={()=>props.CargarPedidos(props.PedidoSend)}><strong>Send</strong></button>
  )
  
};

export default BtnCargaPedido;
