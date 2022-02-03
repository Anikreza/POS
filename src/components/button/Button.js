import React from "react";
import PropTypes from "prop-types";
import '../../style/button.scss';
import {Cart} from "../../helpers/cleanBasket";
import {useStateValue} from "../../states/StateProvider";

const Button = (props) => {

    const disabled = '';
    const [{deliveryMethod},dispatch] = useStateValue();

    function submit() {
        dispatch(
            {
                type: "SetModal",
                item: true
            })
    }

    return (
        <div className='button'>
            <button
                disabled={Cart.length > 0 ? disabled : !disabled}
                className={Cart.length > 0 && deliveryMethod.title ? 'button-glow' : 'button-dim'}
                onClick={submit}
            >
                {props.name}
            </button>
        </div>
    )
}
export default Button

Button.propTypes = {
    name: PropTypes.string
}
