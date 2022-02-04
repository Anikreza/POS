import React, {useEffect, useState} from "react";
import '../../style/settings.scss';
import RecipeData from "../../data/Recipe";
import CentralData from "../home/partial/centralData";
import '../../style/rowColumnStyle.scss';
import TopSection from "../home/partial/topSection";
import PropTypes from "prop-types";
import SettingsOptions from "./partial/settingsOptions";
import AddMore from "../../components/button/AddMore";
import {useNavigate} from "react-router-dom";
import Button from "../../components/button/Button";

const Settings = (props) => {

    const [data, setData] = useState([])
    const navigate=useNavigate()

    useEffect(() => {
        //callback function for the api call for all data
        setData(RecipeData)
    }, []);

    return (
        <div className='settingsContainer'>
            <h2>Settings</h2>
            <div className='settings'>
                <div className='settingsOptions'>
                    <SettingsOptions/>
                </div>
                <div className='settingsRightSide'>
                    <TopSection admin={true}/>{
                    (props.page === 'home') ?
                        <div className='homeData'>
                            <CentralData data={data} admin={true}/>
                        </div>
                        :
                        <div className='homeData'>
                            <CentralData data={props.data} admin={true}/>
                        </div>
                }
                <div className='adminButtons'>
                    <Button name={'Cancel'} cancel={true} admin={true}/>
                    <Button name={'Save Changes'} cancel={true} admin={true}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Settings

Settings.propTypes = {
    data: PropTypes.array,
    page: PropTypes.string
}