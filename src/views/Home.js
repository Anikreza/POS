import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

const Home = (props) => {
    return (
        <div>
            <p>{props.header}</p>
            <p>{props.title}</p>
        </div>
    )
}

export default Home

Home.propTypes = {
    header: PropTypes.string,
    title: PropTypes.string
};