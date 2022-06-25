import React from 'react'
import SidebarOptions from './SidebarOptions'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./css/sidebar.css";
import { useStateValue } from './StateProvider';

const Sidebar = () => {
  const [{user},dispatch] =useStateValue();
  return (
    <div className='sidebar'>
        <SidebarOptions src={user.photoURL} title={user.displayName}/>
        <SidebarOptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png" title="Covid 19 Information Center"/>
        <SidebarOptions src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" title="Friends"/>
        <SidebarOptions src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" title="Groups"/>
        <SidebarOptions  src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" title="Watch"/>
        <SidebarOptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eXC82ZeepQ7.png" title="Events"/>
        <SidebarOptions Icon={KeyboardArrowDownIcon} title="See More"/>

    </div>
  )
}

export default Sidebar