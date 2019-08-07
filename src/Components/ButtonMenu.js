import React from 'react';


const ButtonMenu=(props)=>{

    return (
    <button type="button" className="btn btn-primary mg" onClick={()=>props.CargaProductos(props.idprod)}>{props.producto}</button>
    )
}

export default ButtonMenu;