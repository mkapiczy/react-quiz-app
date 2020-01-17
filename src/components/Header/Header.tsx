import React from 'react';
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    const activeStyle = {color: "#F15B2A"}

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>Quiz</NavLink>
            {" | "}
            <NavLink to="/list" activeStyle={activeStyle} exact>Quiz List</NavLink>
        </nav>
    )
}

export default Header;