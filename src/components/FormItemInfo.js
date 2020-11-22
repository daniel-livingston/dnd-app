import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
};

const FormItemInfo = (props) => (
	<div className='FormItemInfo'>
		<h3 className='FormItemInfo-Title'>{props.title}</h3>
		{props.description && <p className='FormItemInfo-Description'>{props.description}</p>}
	</div>
);

FormItemInfo.propTypes = propTypes;

export default FormItemInfo;
