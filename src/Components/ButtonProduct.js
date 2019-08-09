// @flow
import React from 'react';

const ButtonProduct=(props)=>{
    return(
        <div className="containerProduct">
            {
                props.Producto.map((prod)=>(
                  <button type="button" key={prod.idProducto} className="btn btn-secondary mg" onClick={()=>props.addProduct(prod.idProducto,prod.Producto,prod.Precio)}>{prod.Producto}</button>  
                ))
            }            
        </div>
      
    )
}

export default ButtonProduct;