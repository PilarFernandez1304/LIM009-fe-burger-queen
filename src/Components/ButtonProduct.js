// @flow
import React from 'react';

const ButtonProduct=(props)=>{

    return(
        <div>
            {
                props.Producto.map((prod,index)=>(
                  <button type="button" key={index} className="btn btn-secondary mg">{prod.Producto}</button>  
                ))
            }
        
               
                    
        
            
            
        </div>
      
    )
}

export default ButtonProduct;