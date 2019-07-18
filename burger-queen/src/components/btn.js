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
        const menuBf = ()=> {this.state.Menu.Breakfast.map((el, index) => {
            return (
                <ul>
                    <li>
                        <button type="button">
                            <p>{el.product}</p>
                        </button>
                    </li>
                </ul>
            )
            })
        }
        const menuLunch = this.state.Menu.Lunch.map((el, index) => {
            return (
                <ul>
                    <li>
                        <button type="button">
                            <p>{el.product}</p>
                        </button>
                    </li>
                </ul>
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