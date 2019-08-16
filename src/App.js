import React, { Component } from "react";
import "./bootstrap.min.css";
import "./App.css";
import db from "./config/configFirebase";
import Header from "./Components/Header";
import ButtonMenu from "./Components/ButtonMenu";
import TabPedido from "./Components/TabPedido";
import ButtonProduct from "./Components/ButtonProduct";
import NewOrder from "./Components/NewOrder";
import TotalPedido from "./Components/TotalPedido";
import BtnCargaPedido from "./Components/BtnCargarPedido";

class App extends Component {
  constructor(props) {
    let Digital = new Date();
    super(props);
    this.state = {
      Menu: [],
      Productos: [],
      Pedidos: {
        Cliente: "",
        Mesa: "",
        Date: Digital,
        Order: [],
      }
    };

    this.CargaProductos = this.CargaProductos.bind(this);
    this.CargarPedidos = this.CargarPedidos.bind(this);
    this.createPedido = this.createPedido.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.totalOrder = this.totalOrder.bind(this);
  }

  componentDidMount() {
    db.collection("Menu")
      .get()
      .then(querySnapshot => {
        this.setState({
          Menu: querySnapshot.docs.map(doc => {
            return {
              idMenu: doc.id,
              TipoMenu: doc.data().TipoMenu
            };
          })
        });
      });
  }

  //llenar productos

  CargaProductos(id) {
    let productos = db.collection("Productos");
    var query = productos.where("IdMenu", "==", id);
    query.get().then(querySnapshot => {
      this.setState({
        Productos: querySnapshot.docs.map(doc => {
          return {
            idProducto: doc.id,
            IdMenu: doc.data().IdMenu,
            Producto: doc.data().NomProducto,
            Precio: doc.data().Precio
          };
        })
      });
    });
  }

  createPedido(event) {
    this.setState({
      Pedidos: {
        ...this.state.Pedidos,
        [event.target.name]: event.target.value
      }
    });
  }

  addProduct(id, producto, precio) {
    let ordenes = this.state.Pedidos.Order;
    let Cliente = this.state.Pedidos.Cliente;
    let Mesa = this.state.Pedidos.Mesa;
    let Date = this.state.Pedidos.Date;

    ordenes.push({ ID: id, Producto: producto, Precio: precio });

    this.setState({
      Pedidos: {
        Cliente,
        Mesa,
        Date,
        Order: ordenes
      }
    });
  }

  // Llenar Tabla de Pedidos

  CargarPedidos(PedidoSend) {
    
    console.log(PedidoSend);
    // Add a new document with a generated id.
   
  }

  totalOrder(orden) {
    let cont = 0
    for (let i = 0; i < orden.length; i++) {
     cont = cont + orden[i].Precio;
    } 

    
    return cont;
    
  }

  render() {
    const { Menu } = this.state;
    return (
      <div>
        <Header />
        <div className="jumbotron container">
          <div className="container-form-tab">
            <NewOrder
              valueCliente={this.state.Pedidos.Cliente}
              valueTable={this.state.Pedidos.Table}
              createPedido={this.createPedido}
            />
            <div className="container-tab">
              <TabPedido
                key={this.state.Pedidos}
                fillOrder={this.state.Pedidos.Order}
              />
              <TotalPedido
                precios={this.state.Pedidos.Order}
                totalOrder={this.totalOrder}
                addProduct={this.addProduct}
                
              />
            </div>
          </div>
          <hr />
          <div>
            {Menu.map(prod => (
              <ButtonMenu
                key={prod.idMenu}
                idprod={prod.idMenu}
                producto={prod.TipoMenu}
                CargaProductos={this.CargaProductos}
              />
            ))}
            <div className="containerMenu">
              <ButtonProduct
                key={this.state.Productos.idProducto}
                Producto={this.state.Productos}
                addProduct={this.addProduct}
              />
            </div>
          </div>
          <div>
            <BtnCargaPedido
            PedidoSend={this.state.Pedidos} 
            CargarPedidos={this.CargarPedidos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
