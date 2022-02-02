import React from "react";
import '../../style/items.scss';
import '../../style/forms.scss';
import TextField from "../forms/TextField";
import DeleteIcon from '../../assets/icons/Delete.png';
import PropTypes from "prop-types";
import {getBasketTotal} from "../../states/reducer";
import {useStateValue} from '../../states/StateProvider';

const CartItem = (props) => {

    return (
        <div className='cartItems'>
            <div className='flex-row'>
                <img src={props.data.image}/>
                <div className='flex-detail-column'>
                    <p>{props.data.title}</p>
                    <h1>${props.data.price.toFixed(2)}</h1>
                </div>
                <div className='flex-sum-row'>
                    <div className='space-between'>
                        <h5>{props.data.quantity}</h5>
                        <p>{(props.data.quantity*props.data.price).toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <div className='flex-row-form'>
                   <TextField placeholder='Order Note...' value={''}/>
                    <img onClick={''} src={DeleteIcon} alt='icon'/>
            </div>
        </div>
    )
}

export default CartItem

CartItem.propTypes={
    data:PropTypes.array,
}