import React, {useState, useEffect} from "react";
import '../../style/tabs.scss';

const Tabs = (props) => {
    return (
        <div className='tabs'>
            <button className={(props.active)?'activeStyle':'normalStyle'}>
                {props.title}
            </button>
        </div>
    )
}

export default Tabs