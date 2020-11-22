import React from "react";
import PropTypes from "prop-types";
import FormItemInfo from "./FormItemInfo";
import FormItemInput from "./FormItemInput";

const propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	inputType: PropTypes.string.isRequired,
	inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	inputOnChange: PropTypes.func.isRequired,
	inputPlaceholder: PropTypes.string.isRequired,
	selectOptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

const FormItem = (props) => (
	<div className='FormItem'>
		<FormItemInfo title={props.title} description={props.description} />
		<FormItemInput
			type={props.inputType}
			value={props.inputValue}
			onChange={props.inputOnChange}
			placeholder={props.inputPlaceholder}
			options={props.selectOptions}
		/>
	</div>
);

FormItem.propTypes = propTypes;

export default FormItem;
