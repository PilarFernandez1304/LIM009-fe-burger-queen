import React, { Component } from "react";
import "./bootstrap.min.css";
import "./App.css";
import db from "./config/configFirebase";
import Header from "./Components/Header";
import ButtonMenu from "./Components/ButtonMenu";
import TabPedido from "./Components/TabPedido";
import ButtonProduct from "./Components/ButtonProduct";
import NewOrder from "./Components/NewOrder"

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
    this.createPedido=this.createPedido.bind(this);
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
  
  createPedido(event){
    this.setState({
          Pedidos:{
          ...this.state.Pedidos,
            [event.target.name] : event.target.value,
          }        
    })  
  }

  addProduct(id,producto,precio){
    let ordenes=this.state.Pedidos.Order;
    let Cliente=this.state.Pedidos.Cliente;
    let Mesa=this.state.Pedidos.Mesa;

    ordenes.push({ID:id,Producto:producto,Precio:precio})

    this.setState({
      Pedidos:{
        Cliente,
        Mesa,
        Date:'',
        Order:ordenes
      }
    })  
  }

  // Llenar Tabla de Pedidos

  CargarPedidos(){
  }
  
  render() {
    const { Menu } = this.state;
    
    return (
      <div>
        <Header />
        <div className="jumbotron container">
          <NewOrder valueCliente={this.state.Pedidos.Cliente} valueTable={this.state.Pedidos.Table} createPedido={this.createPedido}></NewOrder>
         
          <hr />
           {
            Menu.map(prod => (            
            <ButtonMenu key={prod.idMenu} idprod={prod.idMenu} producto={prod.TipoMenu} CargaProductos={this.CargaProductos} />
          ))
          }
          <div className="containerMenu">
          <ButtonProduct key={this.state.Productos.idProducto} Producto={this.state.Productos} addProduct={this.addProduct}/>

          <TabPedido fillOrder={this.state.Pedidos.Order}></TabPedido>
          </div>

            
        </div>
           
      </div>
    );
  }
}

export default App;
