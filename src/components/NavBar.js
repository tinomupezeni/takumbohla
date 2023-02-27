import "./NavBarStyles.css";
import { MenuItems } from "./MenuItems";
import { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = { show: false };
  showCurrent = () => {
    this.setState({ show: !this.state.show });
  };
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="NavBar">
          <h1 className="logo">Takumbohla</h1>
          <div className="menu-icons" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "links active" : "links"}>
            {MenuItems.map((item) => {
              return (
                <>
                  <li key={item.id}>
                    <Link to={item.url} className={item.cName}>
                      {item.name}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default NavBar;
