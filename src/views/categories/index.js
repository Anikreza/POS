import React from "react";
import Home from "../home/Home";
import RecipeData from "../../data/Recipe";

const Category = () => {
    return (
        <div className='category'>
            <Home data={RecipeData}/>
        </div>
    )
}

export default Category