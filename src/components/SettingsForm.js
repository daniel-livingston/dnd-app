import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import { setTheme } from "../actions/theme";
import { THEMES } from "../constants";

export class SettingsForm extends React.Component {
	onSubmit = (e) => {
		e.preventDefault();
	};
	onThemeChange = (e) => {
		this.props.setTheme(e.target.value);
	};
	render() {
		const form = {
			sections: [
				{
					header: "Appearance",
					items: [
						{
							title: "Theme",
							description: "Choose the theme for the app.",
							type: "select",
							value: this.props.theme.name,
							onChange: this.onThemeChange,
							options: THEMES.map((theme) => theme.name),
						},
					],
				},
			],
			isCard: false,
			submit: {
				onSubmit: (e) => e.preventDefault(),
			},
		};

		return <Form {...form} />;
	}
}

const mapStateToProps = (state) => ({
	theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
	setTheme: (theme) => dispatch(setTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
