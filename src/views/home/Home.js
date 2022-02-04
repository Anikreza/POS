import React, {useEffect, useState} from "react";
import '../../style/home.scss';
import TopSection from "./partial/topSection";
import SelectOption from "../../components/forms/selectOption";
import {useStateValue} from "../../states/StateProvider";
import CentralData from "./partial/centralData";
import PropTypes from "prop-types";
import ModalContent from "../../components/modal";
import FullCart from "../../components/card/contents/fullCart";

const Home = (props) => {


    const [{basket, category,modal}] = useStateValue();
    const [state, setState] = useState(false)

    useEffect(() => {
        setState(!state)
    }, [basket, category,modal]);


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
                <FullCart isThisForConfirmPayment={false}/>
            <ModalContent/>
        </div>
    )
}

export default Home

Home.propTypes = {
    data: PropTypes.array
}
