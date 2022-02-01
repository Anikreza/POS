import React from "react";
import PropTypes from "prop-types";

const TextField = (props) => {
    return (
        <div>
            <input
                type={"text"}
                value={props.value}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default TextField

TextField.propTypes={
    value:PropTypes.string,
    placeholder:PropTypes.string
}