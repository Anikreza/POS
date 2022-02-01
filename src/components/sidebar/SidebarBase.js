import React from "react";
import '../../style/siddebar.scss'
import SidebarCard from "../card/SidebarCard";
import {Routes} from "../../data/RouteWithIcons";

const sidebarBase = () => {
    return (
        <div className='sidebar'>
            {
                Routes.map((route) =>
                    <SidebarCard key={route.icon} activeIcon={route.activeIcon} icon={route.icon} path={route.path}/>
                )
            }
        </div>
    )
}

export default sidebarBase