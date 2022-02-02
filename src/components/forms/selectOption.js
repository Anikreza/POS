import React from "react";
import '../../style/forms.scss';
import PropTypes from "prop-types";
import {useStateValue} from "../../states/StateProvider";
import {DeliveryMethod} from "../../data/deliveryMethods";

const SelectOption = () => {

    const [{deliveryMethod}, dispatch] = useStateValue();

    return (
        <div className='dineIn'>
            <select
                value={deliveryMethod.title}
                onChange={(e) =>
                    dispatch(
                        {
                            type: "SetDeliveryMethod",
                            item: {
                                title: e.target.value
                            },
                        })}
            >
                <option style={{display: 'none'}}>Choose</option>
                {
                    DeliveryMethod.map((a) => (
                        <option
                            key={a.id}
                            value={a.title}
                        >
                            {a.title}
                        </option>
                    ))
                }

            </select>
        </div>
    )
}
export default SelectOption

SelectOption.propTypes = {
    title: PropTypes.string
}