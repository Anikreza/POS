import React, {useState, useEffect} from "react";
import Search from "../../../components/forms/search";
import {CategoryInfo} from "../../../data/categoryInfo";
import Categories from "../../../components/card/categories";
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const TopSection = () => {

    const rawDate = new Date();
    const date = rawDate.toDateString()
    const [toggle,setToggle]=useState(false);

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
            <div className='dropDownIcon' onClick={()=>setToggle(!toggle)}>
                <IoIosArrowDropdownCircle
                    size='20px'
                    color='#9288E0'
                />
                <span>categories</span>

            </div>
            <div className='header-mobile'>
                <ul className={(toggle)?'headerUl':'hide'}>
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