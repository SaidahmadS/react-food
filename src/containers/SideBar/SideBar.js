import { Link } from 'react-router-dom';

import SidebarBtn from '../SidebarBtn/SidebarBtn'
import {
  HomeIcon,
  DiscountIcon,
  OrderIcon,
  MessageIcon,
  NotificationIcon,
  SettingsIcon,
  LogoutIcon
} from '../../assets/icons/icons'

import SidebarLogoIcon from '../../assets/images/icons/Logo.svg'
import './SideBar.scss';

const SideBar = ({activePage, setActivePage}) => {
  return (
    <div className="sidebar">
      <a href="javascript:void(0)" className="sidebar-logo">
        <img src={SidebarLogoIcon} alt=""/>
      </a>

      <Link to="/homepage">
        <SidebarBtn
          icon={<HomeIcon/>}
        />
      </Link>

      <SidebarBtn icon={<DiscountIcon/>}/>

      <Link to="/orderpage">
        <SidebarBtn
          icon={<OrderIcon/>}
        />
      </Link>

      <SidebarBtn icon={<MessageIcon/>}/>
      <SidebarBtn icon={<NotificationIcon/>}/>

      <Link to="/settingspage" className="settings">
        <SidebarBtn
          icon={<SettingsIcon/>}
        />
      </Link>

      <SidebarBtn icon={<LogoutIcon/>}/>
    </div>
  )
}

export default SideBar;