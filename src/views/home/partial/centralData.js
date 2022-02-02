import React from "react";
import Dish from "../../../components/card/contents/dish";

const centralData = (props) => {
    return (
        <div className='row'>
            {
                props.data.map((data) => (
                    <Dish
                        key={data.id}
                        data={data}
                        Admin={false}
                        Availability={'Bowls Available'}
                    />
                ))
            }
        </div>
    )
}

export default centralData