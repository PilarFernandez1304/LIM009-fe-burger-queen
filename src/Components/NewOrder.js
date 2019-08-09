import React,{Fragment, Component}from 'react';
import ButtonMenu from './ButtonMenu';
import ButtonProduct from './ButtonProduct'
import TabPedido from './TabPedido'


class NewOrder extends Component{
    constructor(){
        super(),
        this.state={
            Cliente:'',
            Fecha:'',
            Mesa:'',
            Order:[]
        }
    }

    render(){
        
        return(
            <Fragment>
                {
                    Menu.map(prod => (            
                    <ButtonMenu key={prod.idMenu} idprod={prod.idMenu} producto={prod.TipoMenu} CargaProductos={this.CargaProductos} />
                ))
                }
              <hr />
              <div className="containerMenu">
              <ButtonProduct key={this.state.Productos.idProducto} Producto={this.state.Productos} addProduct={this.addProduct}/>
    
              <TabPedido></TabPedido>
              </div>
              </Fragment>
        )
    }
}

export default NewOrder;