import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
	to: PropTypes.string.isRequired,
	exact: PropTypes.bool,
	Icon: PropTypes.elementType.isRequired,
	name: PropTypes.string.isRequired,
};

const SidebarLink = (props) => (
	<NavLink
		className='SidebarLink'
		activeClassName='SidebarLink-active'
		to={props.to}
		exact={props.exact}
	>
		<div className='SidebarLink-item'>
			<props.Icon />
			<div className='SidebarLink-title text-primary'>{props.name}</div>
		</div>
	</NavLink>
);

SidebarLink.propTypes = propTypes;

export default SidebarLink;
