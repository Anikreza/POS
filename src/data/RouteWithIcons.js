import HomeIcon from '../icons/sidebar/Home.png'
import ActiveHomeIcon from '../icons/sidebar/HomeBig.png'
import DashboardIcon from '../icons/sidebar/Dashboard.png'
import ActiveDashboardIcon from '../icons/sidebar/DashboardBig.png'
import DiscountIcon from '../icons/sidebar/Discount.png'
import LogOutIcon from '../icons/sidebar/Log Out.png'
import MessageIcon from '../icons/sidebar/Message.png'
import NotificationIcon from '../icons/sidebar/Notification.png'
import ActiveNotificationIcon from '../icons/sidebar/NotificationBig.png'
import RestaurantIcon from '../icons/sidebar/Vector.png'
import SettingIcon from '../icons/sidebar/Setting.png'
import ActiveSettingIcon from '../icons/sidebar/SettingBig.png'

const Routes = [
    {
        icon: RestaurantIcon,
        path: 'Restaurant',
        activeIcon: RestaurantIcon,
    },
    {
        icon: HomeIcon,
        activeIcon: ActiveHomeIcon,
        path: 'home'
    },
    {
        icon: DiscountIcon,
        path: 'discount',
        activeIcon: ActiveHomeIcon,
    },
    {
        icon: DashboardIcon,
        path: 'Dashboard',
        activeIcon: ActiveDashboardIcon,
    },
    {
        icon: MessageIcon,
        path: 'Message',
        activeIcon: ActiveHomeIcon,
    },
    {
        icon: NotificationIcon,
        path: 'Notification',
        activeIcon: ActiveNotificationIcon,
    },
    {
        icon: SettingIcon,
        path: 'Settings',
        activeIcon: ActiveSettingIcon,
    },
    {
        icon: LogOutIcon,
        path: 'LogOut',
        activeIcon: ActiveHomeIcon,
    },
];


export{Routes}