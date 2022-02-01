import React from "react";
import { BrowserRouter as NavLink,Link } from "react-router-dom";
import PropTypes from "prop-types";

const sidebarCard = (props) => {
    const url=window.location.pathname.split("/").pop();
    return (
        <div>
            <ul className={(url===props.path)?'iconClass-ul':'iconActiveClass'}>
                <a href={props.path}>
                    <img src={(url!==props.path)?props.icon:props.activeIcon} alt='icon' />
                </a>
            </ul>
        </div>
    )
}

export default sidebarCard

sidebarCard.propTypes={
    icon:PropTypes.string,
    path:PropTypes.string,
    activeIcon:PropTypes.string,
}

