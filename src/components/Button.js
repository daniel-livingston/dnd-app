import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	id: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
};

const Button = (props) => (
	<button
		id={props.id}
		className='Button'
		onClick={props.onClick}
		style={{ width: props.width || "auto" }}
	>
		{props.name}
	</button>
);

Button.propTypes = propTypes;

export default Button;
