import React from 'react';
import {NavLink} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

const Header: React.FC = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{marginBottom: "5vmin"}}>
            <Navbar.Brand href="/">Quiz App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Nav.Link eventKey="1" as={NavLink} exact to="/">
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2" as={NavLink} exact to="/quiz-list">
                            Quiz List
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="3" as={NavLink} exact to="/new-quiz">
                            New Quiz
                        </Nav.Link>
                    </Nav.Item>
                    {/*<Nav.Item>*/}
                    {/*    <Nav.Link eventKey="4" as={NavLink} exact to="/quiz/random">*/}
                    {/*        Random Quiz*/}
                    {/*    </Nav.Link>*/}
                    {/*</Nav.Item>*/}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;