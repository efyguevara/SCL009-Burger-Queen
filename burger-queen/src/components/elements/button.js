import React, {Component} from 'react';


// <button onClick={this.handleClick} type="button" className="btn btn-danger"></button>
class Button extends Component {

handleClick = () => {
  
  console.log("he sido clickeado")
}

    render() {
        return (

      
<div className="btn" >

<button onClick={this.handleClick} type="button" className="btn btn-danger"></button>


</div>

        );

    }
        
    

}

export default Button;