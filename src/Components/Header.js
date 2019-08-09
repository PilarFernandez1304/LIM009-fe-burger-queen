import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <h2>Burger Queen</h2>

        <div className="collapse navbar-collapse " id="navbarColor02">
          <ul className="navbar-nav mr-auto rightMenu">
            <li className="nav-item active">
              <strong className="nav-link">
                New Order <span className="sr-only">(current)</span> 
              </strong>
            </li>
            <li className="nav-item">
              <strong className="nav-link" >
                Waiter
              </strong>
            </li>
            <li className="nav-item">
              <strong className="nav-link">
                Chef
              </strong>
            </li>
            <li className="nav-item">
              <strong className="nav-link" >
                Update
              </strong>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
