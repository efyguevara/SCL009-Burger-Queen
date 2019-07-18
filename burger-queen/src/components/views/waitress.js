import React, {Component} from 'react';

//import Button from '../elements/button';
//import menu from '../../data/menu.json'
const menuJson = require('../../data/menu.json')
// const breakfast = menu.filter(element => element.type.includes("desayuno"))
// const lunch = menu.filter(element => element.type.includes("almuerzo"))

// console.log("Desayuno", breakfast)
// console.log("Almuerzo", lunch)


class Waitress extends Component {
  constructor(){
    super();
    this.state = {
      menuJson
    }
  }
  
  render() {
    const menu = this.state.menuJson.map((element, index)=>{
      return (
<button className="btn btn-danger">
{element.name + " " + "Precio: $" + element.price}
</button>
      )
    })
    return (
      <div className="waitress">
        <h1>
       Waitress template
        </h1>
     
{ menu }
      </div>
  );
  }
    

}

export default Waitress;