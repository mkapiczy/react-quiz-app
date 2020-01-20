import React from 'react';
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    const activeStyle = {color: "#F15B2A"}

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">Quiz App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item nav-link active">
                        <NavLink to="/" activeStyle={activeStyle} exact>Quiz</NavLink>
                    </li>
                    <li className="nav-item nav-link">
                        <NavLink to="/list" activeStyle={activeStyle} exact>Quiz List</NavLink>
                    </li>
                    <li className="nav-item nav-link">
                        <NavLink to="/quiz/new" activeStyle={activeStyle} exact>New Quiz</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;