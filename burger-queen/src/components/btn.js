import React from 'react';
import Menu from '../data/menuBQ.json'

class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Menu
        }
    }

    render() {
        const menuBf = this.state.Menu.Breakfast.map((el, index) => {
                return (
                        <button type="button" className="btn btn-light btn-lg col-md-8">
                            <p>{el.product}</p>
                        </button>   
                )
            })
        return (
            <div>
                {menuBf}
            </div>
        )
    }

}

export default Btn;