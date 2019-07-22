import React from 'react';
import Menu from '../data/menuBQ.json'
import Btn from './btn.js';

class Lunch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            menuLc: Menu.Lunch,
        }
    }

    render() {
            const btns = this.state.menuLc.map((el, index) => { 
                return (
                    <Btn name={el.product} price={el.price} />
                )
            })
            return(
                <div>
                    {btns}
                </div>
        )
    }
}    


export default Lunch;