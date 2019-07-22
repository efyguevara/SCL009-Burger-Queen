// Dependencies
import React, {Component} from 'react';
//Components

//import Button from '../elements/button'
// assets
import '../../components/components.css'

//data
const menuJson = require('../../data/menu.json')
const breakfast = menuJson.filter(element => element.type.includes("desayuno"))
const lunch = menuJson.filter(element => element.type.includes("almuerzo"))

// Class components
class Waitress extends Component {
  constructor(){
    super();
    this.state = {
      breakfast,
      lunch,
      order: []
  
    }
    this.addToBill = this.addToBill.bind(this)
  }
  addToBill (name,price) {

this.setState = ({
      name:name,
      price:price
    })

console.log(this.setState)


  
}
  

  
  render() {

    const menuBreakfast = this.state.breakfast.map((element, index)=>{
      
      return (  
    
       <button onClick={()=>this.addToBill(element.name, element.price)} className="btn btn-danger" key={index}>{element.name} $ {element.price}
        </button>

      )
})

    return (
      <div className="waitress">
        <h1>Waitress template</h1>
       
        { menuBreakfast }


      </div>
  );
  }
    

}

export default Waitress;