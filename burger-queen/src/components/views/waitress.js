// Dependencies
import React, {Component} from 'react';
import logo from '../../hamburguesa.svg'
//import {db} from '../../firebase/firebaseInit';
//Components

//import Button from '../elements/button'
// assets
import '../../components/components.css'

//data
const menuJson = require('../../data/menu.json')


// Class components
class Waitress extends Component {
  constructor(){
    super();
    this.state = {
      menuBf: menuJson.Breakfast,
      orders: [],
      totalPrice: 0,
      productOrder:" ",
      
  
    }

  }

  handleClick(i) {
    this.setState({
        orders: this.state.orders.concat([i])
        
    });
   
const total = this.state.orders.concat([i]).reduce((prevVal, currentVal) => { return this.state.totalPrice + currentVal.price }, 0)
  // const currentOrder = i.product
 const currentOrder = this.state.orders.concat([i]).reduce(() => { return this.state.productOrder + " - " + i.product}, " ")

    this.setState({
        totalPrice: total,
        productOrder: currentOrder

    })
    
}

// 
  
  render() {
const menuBreakfast = this.state.menuBf.map((element, index)=>{
      
      return (  
      
        <div className="card" stylename="width: 18rem;">
  <img src={logo} className="card-img-top" alt="burger"></img>
  <div className="card-body">
    <h5 className="card-title">{element.product}</h5>
    <p className="card-text">Precio : $ {element.price}</p>
    <button onClick={()=>this.handleClick(element)} className="btn btn-danger" key={index}>Seleccionar
        </button>
  </div>
</div>
       

      )
})

    return (
      <div className="row">
        { menuBreakfast }
<div className="print-order">
Total del pedido: {this.state.totalPrice} 
                        <br></br>
                        Productos: {this.state.productOrder}
                        <br></br>
                        <button onClick={()=>this.sendClick} className="btn btn-danger">Enviar a cocina
        </button>
</div>

 
        
        


     
       
        

      </div>
  );
  }
    

}

export default Waitress;