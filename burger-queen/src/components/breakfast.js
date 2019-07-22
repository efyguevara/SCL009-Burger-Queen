import React from 'react';
import Menu from '../data/menuBQ.json'
import Btn from './btn.js';


class Breakfast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuBf: Menu.Breakfast,
            orders: [],
            totalPrice: 0,
        }
    }

    handleClick(i) {
        this.setState({
            orders: this.state.orders.concat([i])
        });
        const total = this.state.orders.concat([i]).reduce((prevVal, currentVal) => { return this.state.totalPrice + currentVal.price }, 0)
        this.setState({
            totalPrice: total
        })
        console.log(i)
    }


    render() {
        const btns = this.state.menuBf.map((el, index) => {
            return (
                <Btn name={el.product} price={el.price} onClick={() => this.handleClick(el)} />
            )
        })
        return (
            <>
                <div>
                    <div>
                        {btns}
                    </div>

                    <div>
                        Total del pedido: {this.state.totalPrice}
                    </div>
                </div>
            </>
        )
    }
}


export default Breakfast;