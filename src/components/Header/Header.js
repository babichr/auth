import React from "react";
import { Link } from "react-router";

class Header extends React.Component{
    render(){
        return(
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-text">
                        <Link activeStyle={ { color: "#fff"  }} className="navbar-link" to="/" >Login</Link>
                    </div>
                    <div className="navbar-text">
                        <Link activeStyle={ { color: "#fff"  }} className="navbar-link" to="/registration" >Registration</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;