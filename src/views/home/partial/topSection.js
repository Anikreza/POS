import React, {useState, useEffect} from "react";
import Search from "../../../components/forms/search";
import {CategoryInfo} from "../../../data/categoryInfo";
import Categories from "../../../components/card/categories";

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
                            <Categories key={type.id} keys={type.title}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TopSection