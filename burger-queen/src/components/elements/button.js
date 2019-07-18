import React, {Component} from 'react';


class Button extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick = () => {
        this.props.buttonOnClick();
        //console.log("he sido clickeado")
      }

    render() {
        return (

      
<div className="btn" role="group" aria-label="Basic example">

<button onClick={this.handleClick} type="button" className="btn btn-danger">Meser@</button>
<button onClick={this.handleClick} type="button" className="btn btn-danger">Cocina</button>
<button onClick={this.handleClick} type="button" className="btn btn-danger">Órdenes listas</button>

</div>

        );

    }
        
    

}

export default Button;