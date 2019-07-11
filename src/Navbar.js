import React from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              activeStyle={{ color: "red", backgroundColor: "yellow" }}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customers"
              exact
              activeStyle={{ color: "red", backgroundColor: "yellow" }}
            >
              CUSTOMERS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customers/add"
              exact
              activeStyle={{ color: "red", backgroundColor: "yellow" }}
            >
              ADD
            </NavLink>
          </li>
        </ul>
      </>
    );
  }
}
