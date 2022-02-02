import React, {useState, useEffect} from "react";
import Search from "../forms/search";
import {CategoryInfo} from "../../data/categoryInfo";
import Categories from "./categories";

const TopSection = () => {

    const rawDate = new Date();
    const date = rawDate.toDateString()

    return (
        <div className='topSection'>
            <div className='rightSide'>
                <Search/>
            </div>
            <h1>Jaeger Resto</h1>
            <h2>{date}</h2>
            <div className='header'>
                <ul className='headerUl'>
                    {
                        CategoryInfo.map((type) => (
                            <Categories keys={type.title}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TopSection