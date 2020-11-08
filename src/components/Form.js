import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const defaultProps = {
	submit: {
		onSubmit: (e) => e.preventDefault(),
	},
};

const propTypes = {
	sections: PropTypes.arrayOf(
		PropTypes.exact({
			header: PropTypes.string.isRequired,
			items: PropTypes.arrayOf(
				PropTypes.exact({
					title: PropTypes.string.isRequired,
					description: PropTypes.string,
					type: PropTypes.oneOf(["link", "number", "select", "text", "password"])
						.isRequired,
					value: PropTypes.any.isRequired,
					onChange: PropTypes.func,
					errors: PropTypes.arrayOf(
						PropTypes.exact({
							isShowing: PropTypes.bool.isRequired,
							message: PropTypes.string.isRequired,
						})
					),

					// Required if type is select
					options: PropTypes.arrayOf(
						PropTypes.oneOfType([PropTypes.string, PropTypes.number])
					),
					// Required if type is link
					to: PropTypes.string,
				})
			).isRequired,
		})
	).isRequired,
	isCard: PropTypes.bool,
	submit: PropTypes.exact({
		buttonId: PropTypes.string,
		buttonName: PropTypes.string,
		onSubmit: PropTypes.func.isRequired,
	}).isRequired,
};

const Form = (props) => (
	<form className={props.isCard ? "card form" : "form"} onSubmit={props.submit.onSubmit}>
		{/* sections array is required */}
		{props.sections.map((section) => (
			<div key={section.header} className='form__section'>
				{/* Section Header is required */}
				<h2 className='form__section-header'>{section.header}</h2>

				{/* items array in sections is required */}
				{section.items.map((item) => (
					<div key={item.title} className='form__section-body'>
						<div className='form__section-info'>
							{/* Each item must have a title */}
							<h3 className='form__input-title'>{item.title}</h3>
							{/* Each item may have a description */}
							{item.description && (
								<p className='form__input-description'>{item.description}</p>
							)}
							{/* Each item may have a list of potential error handlers */}
							{item.errors &&
								item.errors
									.filter((error) => error.isShowing)
									.map((error) => (
										<div key={error.message} className='form__error'>
											{error.message}
										</div>
									))}
						</div>

						{/* Possible item types */}
						{item.type === "link" && (
							<Link className='form__link' to={item.to}>
								{item.value}
							</Link>
						)}

						{item.type === "number" && (
							<input
								type='number'
								className='form__input'
								value={item.value}
								onChange={item.onChange}
							/>
						)}

						{item.type === "select" && (
							<select
								className='form__select'
								value={item.value}
								onChange={item.onChange}
							>
								{item.options.map((option) => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</select>
						)}

						{item.type === "text" && (
							<input
								type='text'
								className='form__input'
								value={item.value}
								onChange={item.onChange}
								placeholder={item.title}
							/>
						)}

						{item.type === "password" && (
							<input
								type='password'
								className='form__input'
								value={item.value}
								onChange={item.onChange}
								placeholder={item.title}
							/>
						)}
					</div>
				))}
			</div>
		))}

		{/* Only displays button if button information provided */}
		{props.submit.buttonName && (
			<div className='form__button-container'>
				<button id={props.submit.buttonId} className='form__button'>
					{props.submit.buttonName}
				</button>
			</div>
		)}
	</form>
);

Form.defaultProps = defaultProps;
Form.propTypes = propTypes;

export default Form;
