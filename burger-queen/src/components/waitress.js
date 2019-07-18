import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Kitchen from './kitchen';
import Btn from './btn';
import Menu from '../data/menuBQ.json'


class Waitress extends React.Component {


  render() {

    return (
      <>
        <div className="row">
          <div className="col col-md-4 float-md-none m-3">
          
            <Link to="/kitchen">
              <button type="button" className="btn btn-dark btn-lg col-md-8">
                MENÚ DESAYUNO
              </button>
            </Link>
            <Btn OnClick={menuBf}/>

          </div>
          <div className="col col-md-4 float-md-none m-3">
            <button type="button" className="btn btn-dark btn-lg col-md-8" href="/kitchen">
              MENÚ ALMUERZO/CENA
            </button>
          </div>
        </div>

        <BrowserRouter>
          <Switch>
            <Route exact path="/kitchen" component={Kitchen} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}



export default Waitress;