import React from "react";
import '../../style/items.scss';
import '../../style/forms.scss';
import TextField from "../forms/TextField";
import DeleteIcon from '../../icons/Delete.png';
import PropTypes from "prop-types";

const cartItem = (props) => {
    return (
        <div className='cartItems'>
            <div className='flex-row'>
                <img src={props.data[1].image}/>
                <div className='flex-detail-column'>
                    <p>{props.data[0].title}</p>
                    <h1>${props.data[0].price}</h1>
                </div>
                <div className='flex-sum-row'>
                    <div className='space-between'>
                        <h5>2</h5>
                        <p>$12.50</p>
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

export default cartItem

cartItem.propTypes={
    data:PropTypes.array,
}