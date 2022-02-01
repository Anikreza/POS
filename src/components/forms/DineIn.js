import React from "react";
import '../../style/forms.scss';
import PropTypes from "prop-types";

import {AiFillCaretDown} from "react-icons/ai"

const DineIn = (props) => {
    return (
        <div className='dineIn'>
            <p><AiFillCaretDown/> {props.title}</p>
        </div>
    )
}

export default DineIn
DineIn.propTypes={
    title:PropTypes.string
}