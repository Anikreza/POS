import React from "react";
import SettingsOptionsCard from "../../../components/card/settingsOptionsCard";
import {AdminPanelSettings} from "../../../data/adminPanelSettings";

const settingsOptions = () => {
    return (
        <div>
            {
                AdminPanelSettings.map((settings)=>(
                    <SettingsOptionsCard header={settings.header} title={settings.title} route={settings.route}/>
                ))
            }
        </div>
    )
}

export default settingsOptions