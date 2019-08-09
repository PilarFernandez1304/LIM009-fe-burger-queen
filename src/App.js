import React, { Component } from "react";
import "./bootstrap.min.css";
import "./App.css";
import db from "./config/configFirebase";
import Header from "./Components/Header";
import ButtonMenu from "./Components/ButtonMenu";
import TabPedido from "./Components/TabPedido";
import ButtonProduct from "./Components/ButtonProduct"

class App extends Component {
  constructor(props) {
    super(props);
     this.state = {
      Menu: [],
      Productos:[],
      Pedidos:{
        Cliente:'',
        Mesa:'',
        Date:'',
        Order:[]

      }
    };

    this.CargaProductos=this.CargaProductos.bind(this);
    this.CargarPedidos=this.CargarPedidos.bind(this);
    this.addProduct=this.addProduct.bind(this);
  }

  componentDidMount() {
    db.collection("Menu")
      .get()
      .then(querySnapshot => {
        this.setState({
          Menu:querySnapshot.docs.map(
            doc => {
             return {
                idMenu:doc.id,
                TipoMenu: doc.data().TipoMenu
              }
            })
        })
    });  
  }

  //llenar productos

  CargaProductos(id) {
    let productos = db.collection("Productos");
    var query = productos.where("IdMenu", "==",id)
    query.get().then( (querySnapshot) =>{
      this.setState({
        Productos:querySnapshot.docs.map(
          doc => {
           return {
              idProducto:doc.id,
              IdMenu:doc.data().IdMenu,
              Producto:doc.data().NomProducto,
              Precio:doc.data().Precio

            }
          })
      })
  })
  }
  

  addProduct(id,producto,precio){
    
  }

  // Llenar Tabla de Pedidos

  CargarPedidos(id,producto,precio){
    
    this.setState({
      Pedidos:{
        producto:`${producto}`,
        Precio:precio
      }
    })
  

  
     
  }
  
  render() {
    const { Menu } = this.state;
    
    return (
      <div>
        <Header />
        <div className="jumbotron container">
         
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

            
        </div>
           
      </div>
    );
  }
}

export default App;
