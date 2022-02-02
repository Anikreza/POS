import React, {useState} from "react";
import '../../style/forms.scss';
import PropTypes from "prop-types";

const DineIn = (props) => {

    const [method, setMethod] = useState('');

    return (
        <div className='dineIn'>
            <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
            >
                <option style={{display: 'none'}}>Choose</option>
                <option
                    value={props.title}
                >
                    {props.title}
                </option>
            </select>
        </div>
    )
}
export default DineIn

DineIn.propTypes = {
    title: PropTypes.string
}