import DashboardIcon from '../assets/icons/sidebar/DashboardIcon';
import DiscountIcon from "../assets/icons/sidebar/DiscountIcon";
import SettingsIcon from "../assets/icons/sidebar/SettingsIcon";
import LogOutIcon from "../assets/icons/sidebar/LogOutIcon";
import HomeIcon from "../assets/icons/sidebar/HomeIcon";
import RestaurantIcon from "../assets/icons/sidebar/RestaurantIcon";
import NotificationIcon from "../assets/icons/sidebar/Notiication";
import MessageIcon from "../assets/icons/sidebar/MessageIcon";

const Routes = [
    {
        icon: <RestaurantIcon color={'#EA7C69'} width={'30'} height={'25'}/>,
        path: '/Restaurant',
        activeIcon: <RestaurantIcon color={'white'} width={'30'} height={'25'}/>
    },
    {
        icon:<HomeIcon color={'#EA7C69'} width={'30'} height={'25'}/>,
        activeIcon: <HomeIcon color={'white'} width={'30'} height={'25'}/>,
        path: '/'
    },
    {
        icon: <DiscountIcon color={'#EA7C69'} width={'30'} height={'25'}/>,
        path: '/discount',
        activeIcon: <DiscountIcon color={'white'} width={'30'} height={'25'}/>,
    },
    {
        icon: <DashboardIcon color={'#EA7C69'} width={'30'} height={'25'}/>,
        path: '/Dashboard',
        activeIcon:<DashboardIcon color={'white'} width={'30'} height={'25'}/>,
    },
    {
        icon: <MessageIcon color={'#EA7C69'} width={'30'} height={'25'}/>,
        path: '/Message',
        activeIcon: <MessageIcon color={'white'} width={'30'} height={'25'}/>
    },
    {
        icon: <NotificationIcon color={'#EA7C69'} width={'30'} height={'25'}/>,
        path: '/Notification',
        activeIcon: <NotificationIcon color={'white'} width={'30'} height={'25'}/>,
    },
    {
        icon: <SettingsIcon color={'#EA7C69'} width={'30'} height={'25'}/>,
        path: '/Settings',
        activeIcon: <SettingsIcon color={'white'} width={'30'} height={'25'}/>,
    },
    {
        icon: <LogOutIcon color={'#EA7C69'} width={'40'} height={'40'}/>,
        path: '/LogOut',
        activeIcon: <LogOutIcon color={'white'} width={'40'} height={'40'}/>,
    },
];


export{Routes}