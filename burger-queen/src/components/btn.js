import React from 'react';

function Btn(props) {
    return (
        <button type="button" className="btn btn-warning btn-lg col-md-8 m-2" onClick={props.onClick}>
            {props.name} {props.price}
        </button>
    )
}


export default Btn;