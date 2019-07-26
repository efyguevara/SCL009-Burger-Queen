import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Waitress from './components/views/waitress';
import WaitressLunch from './components/views/waitressLunch';
import Kitchen from './components/views/kitchen';
import Orders from './components/views/orders';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const initRouter = (
    <BrowserRouter>
<Switch>
<Route exact path= {process.env.PUBLIC_URL + '/'} component={Waitress} />
 <Route exact path={process.env.PUBLIC_URL + '/waitress-breakfast'} component={Waitress} />
 <Route exact path={process.env.PUBLIC_URL + '/waitress-lunch'} component={WaitressLunch} />
<Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
<Route exact path={process.env.PUBLIC_URL + '/orders'} component={Orders} />
</Switch>
</BrowserRouter>
)
ReactDOM.render(initRouter, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
