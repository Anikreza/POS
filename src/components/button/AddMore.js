import React from "react";
import PropTypes from "prop-types";
import '../../style/button.css';

const AddMore = (props) => {
    return (
        <div className='addButton'>
            <button style={{background:props.color}}> {props.name}</button>
        </div>
    )
}

export default AddMore

AddMore.propTypes={
    color:PropTypes.string,
    name:PropTypes.element
}