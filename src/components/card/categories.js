import React, {useState, useEffect} from "react";

const Categories = (props) => {
    return (
        <div>
            <li onClick={''}>
                {props.keys}
            </li>
        </div>
    )
}

export default Categories