import React from 'react';
import '../../components/components.css'


function NavBar() {
    return (
        <div className="navbar">
          <h1>
          BurgerQueen<span aria-label="emoji" role="img">👑</span>
          </h1>
       
<a href="./waitress" className="btn btn-success">Mesero</a>
<a href="./kitchen" className="btn btn-success">Cocina</a>
<a href="./orders" className="btn btn-success">órdenes listas</a> 


        </div>
    );

}

export default NavBar;