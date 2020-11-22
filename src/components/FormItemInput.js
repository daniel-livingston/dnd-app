import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

const FormItemInput = (props) => {
	const getInput = (type, onChange, placeholder, value, options) => {
		switch (type) {
			case "number": {
				return (
					<input
						className='FormItemInput FormItemInput-Number'
						onChange={props.onChange}
						type='number'
						value={props.value}
					/>
				);
			}
			case "password": {
				return (
					<input
						className='FormItemInput FormItemInput-Password'
						onChange={onChange}
						placeholder={placeholder}
						type='text'
						value={value}
					/>
				);
			}
			case "select": {
				if (!options) throw Error("No options array provided");
				return (
					<select
						className='FormItemInput FormItemInput-Select'
						onChange={onChange}
						value={value}
					>
						{options.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				);
			}
			case "text": {
				return (
					<input
						className='FormItemInput FormItemInput-Text'
						onChange={onChange}
						placeholder={placeholder}
						type='text'
						value={value}
					/>
				);
			}
		}
	};

	return getInput(props.type, props.onChange, props.placeholder, props.value, props.options);
};

FormItemInput.propTypes = propTypes;

export default FormItemInput;
