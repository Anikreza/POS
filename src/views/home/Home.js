import React, {useEffect, useState} from "react";
import '../../style/home.scss';
import TopSection from "./partial/topSection";
import Tabs from "../../components/tabs/tabs";
import CartItem from "../../components/card/contents/cartItem";
import Button from "../../components/button/Button";
import SelectOption from "../../components/forms/selectOption";
import {Cart, CleanBasket} from "../../helpers/cleanBasket";
import {getBasketTotal} from "../../states/reducer";
import {useStateValue} from "../../states/StateProvider";
import {DeliveryMethod} from "../../data/deliveryMethods";
import CentralData from "./partial/centralData";
import PropTypes from "prop-types";

const Home = (props) => {

    const [{deliveryMethod,basket,category}] = useStateValue();
    const [state,setState]=useState(false)

    useEffect(() => {
        setState(!state)
        console.log(category.title)
    }, [basket,category]);


    return (
        <div className='home-Container'>
            <div className='home'>
                <TopSection/>
                <hr/>
                <div className='flex-split'>
                    <h2>Choose Dishes</h2>
                    <li>
                        <SelectOption/>
                    </li>
                </div>
                <div className='homeData'>
                    <CentralData data={props.data}/>
                </div>
            </div>
            <div className='homeRightSide'>
                <h2>Orders #31212 </h2>
                <div className='flex-row'>
                    {
                        DeliveryMethod.map((method)=>(
                            <li key={method.id}>
                                <Tabs title={method.title} condition={deliveryMethod.title}/>
                            </li>
                        ))
                    }
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
                <CleanBasket/>
                <div className='orderList'>
                    {
                        Cart.map((item)=>(
                            <CartItem data={item}/>
                        ))
                    }
                </div>
                <hr/>
                <div className='orderSubmitTab'>
                    <p>Discount <span>$0</span></p>
                    <p>SubTotal <span>${getBasketTotal(Cart).toFixed(2)}</span></p>
                </div>
                <div style={{padding: '20px'}}>
                    <Button name={'Continue To Payment'}/>
                </div>
            </div>
        </div>
    )
}

export default Home

Home.propTypes={
    data:PropTypes.array
}
