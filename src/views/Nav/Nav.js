import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="top-nav">
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/todo-list" activeClassName="active">Todo</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </div >
        )
    }
}

export default Nav;