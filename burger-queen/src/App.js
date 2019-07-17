import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/elements/navbar';
import Waitress from './components/views/waitress';
import Kitchen from './components/views/kitchen';
import Orders from './components/views/orders';
// import Button from './components/elements/button';
// <Button  buttonOnClick={ hazAlgo => console.log("He sido clickeado")}/>
import './App.css';
const menu = require('./data/foodOptions.json')
console.log(menu)


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
<a href="./waitress" className="btn btn-success">Mesero</a>
<a href="./kitchen" className="btn btn-success">Cocina</a>
<a href="./orders" className="btn btn-success">órdenes listas</a>

</div>

         </div>

    
  );
}


export default App;
