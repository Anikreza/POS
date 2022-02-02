import React, {useEffect, useState} from "react";
import '../../style/dish.scss';
import PropTypes from "prop-types";
import {useStateValue} from "../../states/StateProvider";
import {CleanBasket,Cart} from "../../helpers/cleanBasket";

const Dish = (props) => {

    const [{basket}, dispatch] = useStateValue();
    const [quantity, setQuantity] = useState(1)


    function addToCart() {
        setQuantity(quantity + 1)
        if (quantity <= props.data.stock)
        {
            dispatch(
                {
                    type: "ADD_TO_BASKET",
                    id: props.data.id,
                    item: {
                        productId: props.data.id,
                        title: props.data.title,
                        price: props.data.price,
                        image:props.data.image,
                        quantity:quantity
                    },
                })
        }
        else {
            alert('out Of Stock')
        }

        console.log('data',Cart)
    }

    return (
        <div className='column'>
            <div className='content'>
                <div className='dish'
                     onClick={() => addToCart()}
                >
                    <div className={(props.Admin === true) ? 'adminDesign' : 'userDesign'}>
                        <img src={props.data.image} alt='product'/>
                        <div className='container'>
                            <h3>{props.data.title}</h3>
                            <h4>${props.data.price}</h4>
                            <h5>{props.data.stock} {props.Availability}</h5>
                        </div>
                        <div className={(props.Admin) ? 'editDish' : 'hidden'}>
                            <button>
                                Edit Dish
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dish

Dish.propTypes = {
    data: PropTypes.object,
    Admin: PropTypes.bool,
    Availability: PropTypes.string
}