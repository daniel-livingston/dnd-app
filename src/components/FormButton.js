import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const propTypes = {
	onClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string,
	justify: PropTypes.oneOf(["start", "end", "center"]),
	width: PropTypes.oneOf(["100%", "normal"]),
};

const FormButton = (props) => {
	const parseJustify = (justify = "end") => {
		if (justify === "center") {
			return justify;
		}
		return "flex-" + justify;
	};

	const parseWidth = (width = "normal") => {
		if (width === "100") {
			return "100%";
		}
		return "auto";
	};

	return (
		<div
			className='FormButton-Container'
			style={{ justifyContent: parseJustify(props.justify) }}
		>
			<Button
				onClick={props.onClick}
				name={props.name}
				width={parseWidth(props.width)}
				id={props.id}
			/>
		</div>
	);
};

FormButton.propTypes = propTypes;

export default FormButton;
