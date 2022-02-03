import React from "react";
import {DeliveryMethod} from "../../../data/deliveryMethods";
import Index from "../../tabs";
import {Cart, CleanBasket} from "../../../helpers/cleanBasket";
import CartItem from "./cartItem";
import {getBasketTotal} from "../../../states/reducer";
import Button from "../../button/Button";
import {useStateValue} from "../../../states/StateProvider";

const FullCart = () => {

    const [{deliveryMethod}] = useStateValue();

    return (
        <div>
            <div className='homeRightSide'>
                <h2>Orders #31212 </h2>
                <div className='flex-row-home'>
                    {
                        DeliveryMethod.map((method) => (
                            <li key={method.id}>
                                <Index title={method.title} condition={deliveryMethod.title}/>
                            </li>
                        ))
                    }
                </div>

                <div className='flex-row-list'>
                    <li>
                        Item
                    </li>
                    <div className='toRight'>
                        <li>
                            Qty
                        </li>
                        <li style={{marginLeft:'-25px'}}>
                            Price
                        </li>
                    </div>
                </div>
                <hr/>
                <CleanBasket/>
                <div className='orderList'>
                    {
                        Cart.map((item) => (
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

export default FullCart