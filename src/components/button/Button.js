import React from "react";
import PropTypes from "prop-types";
import '../../style/button.scss';

const Button = (props) => {
    return (
        <div className='button' style={{background:props.background}}>
            <button style={{color:props.color}}>{props.name}</button>
        </div>
    )
}
export default Button

Button.propTypes={
    background:PropTypes.string,
    color:PropTypes.string,
    name:PropTypes.string
}
