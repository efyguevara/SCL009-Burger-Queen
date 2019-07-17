import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Waitress from './components/waitress';
import Kitchen from './components/kitchen';
import Orders from './components/orders';
// import Button from './components/button';

import './App.css';


function App() {

  return (
    
    
      <div className="App">
<NavBar />
<BrowserRouter>
<Switch>
<Route exact path="/waitress" component={Waitress} />
<Route exact path="/kitchen" component={Kitchen} />
<Route exact path="/orders" component={Orders} />
</Switch>
</BrowserRouter>
<div className="clients">
<div className="btn-group" role="group" aria-label="Basic example">

  <button type="button" className="btn btn-success">Meser@</button>
  <button type="button" className="btn btn-success">Cocina</button>
  <button type="button" className="btn btn-success">Órdenes listas</button>
</div>

</div>



         </div>

    
  );
}


export default App;
