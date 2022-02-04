import React from "react";
import PropTypes from "prop-types";
import '../../style/button.scss';
import {VscAdd} from 'react-icons/vsc'

const AddMore = (props) => {
    return (
        <div className='addButton'>
            <button style={{ background:props.background, color:props.color}}><VscAdd size='25px'/></button>
            <p>{props.name}</p>
        </div>
    )
}

export default AddMore

AddMore.propTypes={
    color:PropTypes.string,
    name:PropTypes.element,
    background:PropTypes.string
}