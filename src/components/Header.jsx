import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import headerStyles from "../styles/Header.module.css";

//navigation bar
class Header extends Component {
  render() {
    return (
      <div className={headerStyles.header}>
        <div id={headerStyles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul>
            <Link to="/blogs" className={headerStyles.link}>
              <li className={headerStyles.list}>Home </li>
            </Link>
            <li className={headerStyles.list}> Contact Us</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
