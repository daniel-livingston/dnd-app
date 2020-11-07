import React from "react";
import { Link } from "react-router-dom";

// Accepts form items in props with the following format:
// form = {
//     sections: [
//         {
//             header: "section header",
//             items: [
//                 {
//                     title: "Input title",
//                     description: "Input description",
//                     type: "select",
//                     value: this.props.theme.name,
//                     onChange: this.onThemeChange,
//                     options: THEMES.map((theme) => theme.name),
//                 },
//             ],
//         }
//     ],
//     isCard: true
//     submit: {
//         buttonId: "form-button",
//         buttonName: "Submit",
//         onSubmit: function
//     }
// }

const Form = (props) => (
	<form className={props.isCard ? "card form" : "form"} onSubmit={props.submit.onSubmit}>
		{props.sections.map((section) => (
			<div key='form__section'>
				<h2 className='form__section-header'>{section.header}</h2>
				{section.items.map((item) => (
					<div key={item.title} className='form__section-body'>
						<div className='form__section-info'>
							<h3 className='form__input-title'>{item.title}</h3>
							<p className='form__input-description'>{item.description}</p>
							{item.errors &&
								item.errors
									.filter((error) => error.isShowing)
									.map((error) => (
										<div key={error.message} className='form__error'>
											{error.message}
										</div>
									))}
						</div>

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

		<div className='form__button-container'>
			{props.submit.buttonName ? (
				<button id={props.submit.buttonId} className='form__button'>
					{props.submit.buttonName}
				</button>
			) : null}
		</div>
	</form>
);

export default Form;
