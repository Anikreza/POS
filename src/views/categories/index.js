import React from "react";
import Home from "../home/Home";
import CategoryData from "../../data/categoryData";

const Category = () => {
    return (
        <div className='category'>
            <Home data={CategoryData}/>
        </div>
    )
}

export default Category