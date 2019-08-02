// @flow
import React from 'react';

const ButtonProduct=({Nombre})=>{
    return(
        <button type="button" className="btn btn-secondary mg">{Nombre.Producto}</button>
    )
}

export default ButtonProduct;