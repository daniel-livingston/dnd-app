import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useTitle from "../hooks/useTitle";

const propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export const View = (props) => {
	useTitle(props.title);

	return (
		<div className='content'>
			<div className='content__header'>
				<div className='content__header__info'>
					<h1 className='content__header__title'>{props.title}</h1>
					<p className='content__header__description'>{props.description}</p>
				</div>
				{props.isLoggedIn ? (
					<Link className='link' to='/'>
						{props.username}
					</Link>
				) : (
					<Link className='link' to='/login'>
						Log in
					</Link>
				)}
			</div>
			<div className='content__body'>{props.children}</div>
		</div>
	);
};

View.propTypes = propTypes;

const mapStateToProps = (state) => ({
	isLoggedIn: state.user.isLoggedIn,
	username: state.user.username,
});

export default connect(mapStateToProps)(View);
