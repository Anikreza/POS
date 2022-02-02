import React from "react";
import '../../style/dish.scss';
import PropTypes from "prop-types";

const Dish = (props) => {
    return (
        <div className='column'>
            <div className='content'>
                <div className='dish'>
                    <div className={(props.Admin === true) ? 'adminDesign' : 'userDesign'}>
                        <img src={props.data.image} alt='image'/>
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