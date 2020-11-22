import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import { setTheme } from "../actions/theme";
import { THEMES } from "../constants";

export class SettingsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			testing: true,
		};
	}
	onThemeChange = (e) => {
		this.props.setTheme(e.target.value);
	};
	render() {
		return (
			<div className='SettingsForm'>
				<Form
					header='Appearance'
					items={[
						{
							title: "Theme",
							description: "Choose the theme for the app.",
							inputType: "select",
							inputValue: this.props.theme.name,
							inputOnChange: this.onThemeChange,
							inputPlaceholder: "Theme",
							selectOptions: THEMES.map((theme) => theme.name),
						},
					]}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
	setTheme: (theme) => dispatch(setTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
