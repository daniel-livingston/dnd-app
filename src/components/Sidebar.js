import React from "react";
import SidebarLink from "./SidebarLink";
import { SIDEBAR_ICONS } from "../constants";

const Sidebar = () => (
	<div className='Sidebar'>
		<SidebarLink to='/' Icon={SIDEBAR_ICONS.Home} name='Home' exact />
		<SidebarLink to='/canvas' Icon={SIDEBAR_ICONS.Canvas} name='Canvas' />
		<SidebarLink to='/dice' Icon={SIDEBAR_ICONS.Dice} name='Dice' />
		<SidebarLink to='/settings' Icon={SIDEBAR_ICONS.Settings} name='Settings' />
	</div>
);

export default Sidebar;
