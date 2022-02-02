import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import '../style/home.scss';
import TopSection from "../components/card/topSection";
import Dish from "../components/contents/dish";
import RecipeData from "../data/Recipe";
import Tabs from "../components/tabs/tabs";
import CartItem from "../components/contents/cartItem";
import Button from "../components/button/Button";

const Home = () => {
    return (
        <div className='home-Container'>
            <div className='home'>
                <TopSection/>
                <hr/>
                <div className='homeData'>
                    <div className='row'>
                        {
                            RecipeData.map((data) => (
                                <Dish
                                    data={data}
                                    Admin={false}
                                    Availability={'Bowls Available'}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='homeRightSide'>
                <h2>Orders #31212 </h2>
                <div className='flex-row'>
                    <li>
                        <Tabs title={'Dine In'} active={true}/>
                    </li>
                    <li>
                        <Tabs title={'To Go'} active={false}/>
                    </li>
                    <li>
                        <Tabs title={'Delivery'} active={false}/>
                    </li>
                </div>

                <div className='flex-row'>
                    <li>
                        <p>Item</p>
                    </li>
                    <div className='toRight'>
                        <li>
                            <p>Qty</p>
                        </li>
                        <li>
                            <p>Price</p>
                        </li>
                    </div>
                </div>
                <hr/>
                <div className='orderList'>
                    <CartItem data={RecipeData}/>
                    <CartItem data={RecipeData}/>
                    <CartItem data={RecipeData}/>
                    <CartItem data={RecipeData}/>
                    <CartItem data={RecipeData}/>
                    <CartItem data={RecipeData}/>
                </div>
                <hr/>
                <div className='orderSubmitTab'>
                    <p>Discount <span>$0</span></p>
                    <p>SubTotal <span>$12.20</span></p>
                </div>
                <div style={{padding:'10px'}}>
                    <Button color={'white'} name={'Continue To Payment'} background={'#EA7C69'}/>
                </div>
            </div>
        </div>
    )
}

export default Home
