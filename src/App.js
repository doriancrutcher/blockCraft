import "regenerator-runtime/runtime";
import React, { useState } from "react";
import { login, logout } from "./utils";
import "./global.css";
import "./scss/App.scss";

// React Router
import {
  Navbar,
  Nav,
  Form,
  Button,
  NavDropdown,
  FormControl,
} from "react-bootstrap";

// React Router
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Mint from "./Components/Mint";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import SignInPage from "./Components/SignInPage";
import getConfig from "./config";
import PlashapeLogo from "./assets/PlashapeLogo.png";

import { async } from "regenerator-runtime/runtime";
const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {
  const [accountExists, changeAccountExists] = useState(false);
  return (
    <div>
      <Router>
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand href='/'>
            Plashape <img style={{ width: "3vh" }} src={PlashapeLogo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link>
                <Link to='/'>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/MyCrafts'>MyCrafts</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/Mint'>Mint</Link>
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
            <Nav.Link
              onClick={window.walletConnection.isSignedIn() ? logout : login}
            >
              {window.walletConnection.isSignedIn()
                ? window.accountId
                : "Login"}
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>

        {accountExists ? (
          <SignInPage />
        ) : (
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/mint'>
              <Mint />
            </Route>
            <Route exact path='/MyCrafts'>
              <Profile signedInName={window.accountId} />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}
