import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './components.css'
import Waitress from './waitress';
import Kitchen from './kitchen';
import Orders from './orders';

function NavBar() {
  return (
    <>

      <div>
        <nav className="nav nav-pills nav-fill">
          <a className="nav-item nav-link" href="/waitress">Mesero</a>
          <a className="nav-item nav-link" href="/kitchen">Cocina</a>
          <a className="nav-item nav-link" href="/orders">Órdenes</a>
        </nav>
      </div>

      <div className="">
        <BrowserRouter>
          <Switch>
            <Route exact path="/waitress" component={Waitress} />
            <Route exact path="/kitchen" component={Kitchen} />
            <Route exact path="/orders" component={Orders} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );

}

export default NavBar;