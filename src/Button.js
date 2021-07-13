import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button=({btntext})=>{
    return(
        <button className="btn">{btntext}</button>
        );
}

export default Button;