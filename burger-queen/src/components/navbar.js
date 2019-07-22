import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './components.css'
import Waitress from './waitress';
import Kitchen from './kitchen';
import Orders from './orders';

function Nav() {
  return (
    <>
      <div>
        <nav className="nav nav-pills nav-fill navbar-dark bg-dark">
          <a className="nav-item nav-link text-white" href="/waitress">Mesero</a>
          <a className="nav-item nav-link text-white" href="/kitchen">Cocina</a>
          <a className="nav-item nav-link text-white" href="/orders">Órdenes listas</a>
        </nav>
      </div>

      <div>
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


export default Nav;