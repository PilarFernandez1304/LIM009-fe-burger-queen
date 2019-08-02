import React from 'react';


const ButtonMenu=({producto})=>{

    return (
    <button type="button" className="btn btn-primary mg">{producto.TipoMenu}</button>
    )
}

export default ButtonMenu;