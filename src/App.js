import React, {Component} from 'react';
import './bootstrap.min.css';
import './App.css'
import firebase from 'firebase';
import firebaseConfig from './config/configFirebase'
import 'firebase/firestore';
import Header from './Components/Header';
import ButtonMenu from './Components/ButtonMenu'
import ButtonProduct from './Components/ButtonProduct'


class App extends Component{ 
  

  constructor(props){
    super(props);
    // dbConnection
    this.app=firebase.initializeApp(firebaseConfig);
    //this db=this.app.firestore()
    this.state={
      productos:
      [
        { idProducto:'1',
          Producto:'Jugo Natural',
          Precio:5,
          TipoMenu: 'Desayuno'
        },
        {
          idProducto:'2',
          Producto:'Hamburguesa',
          Precio:5,
          TipoMenu: 'Almuerzo'
        }
      ]
    }

  }
  
      
  render(){
    const{productos}=this.state
    return (      
        <div>
          <Header></Header>
          <div className="jumbotron container">
          <h1 className="display-3">Pedidos!</h1>
            {
              productos.map(prod=>(
                
                <ButtonMenu 
                key={prod.idProducto}
                producto={prod}></ButtonMenu>
              ))
            }
            <hr></hr>
            {
              productos.map(prod=>(
                
                <ButtonProduct
                key={prod.idProducto}
                Nombre={prod}></ButtonProduct>
              ))
            }
           
      
        </div>
          
          
        </div>
    );

  }  
}

export default App;
