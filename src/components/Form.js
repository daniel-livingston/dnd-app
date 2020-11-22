import React from "react";
import PropTypes from "prop-types";
import FormItem from "./FormItem";
import FormButton from "./FormButton";

const propTypes = {
	header: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.exact({
			title: PropTypes.string.isRequired,
			description: PropTypes.string,
			inputType: PropTypes.string.isRequired,
			inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
			inputOnChange: PropTypes.func.isRequired,
			inputPlaceholder: PropTypes.string.isRequired,
			selectOptions: PropTypes.arrayOf(
				PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
			),
		})
	).isRequired,
	button: PropTypes.exact({
		onClick: PropTypes.func.isRequired,
		id: PropTypes.string,
		name: PropTypes.string.isRequired,
		justify: PropTypes.string,
		width: PropTypes.string,
	}),
};

const Form = (props) => (
	<form className='Form' onSubmit={(e) => e.preventDefault()}>
		{props.header && <h2 className='Form-header'>{props.header}</h2>}
		{props.items.map((item) => (
			<FormItem {...item} key={item.title} />
		))}
		{props.button && <FormButton {...props.button} />}
	</form>
);

Form.propTypes = propTypes;

export default Form;
