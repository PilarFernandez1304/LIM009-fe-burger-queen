import React ,{ Component} from "react";
import ButtonMenu from "./ButtonMenu";

class Main extends Component {
    
  render() {
    return (
      <div className="jumbotron container">
        <h1 className="display-3">Hello, world!</h1>
        <ButtonMenu></ButtonMenu>
       
      </div>
    );
  }
}

export default Main