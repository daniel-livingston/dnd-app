import React from "react";
import View from "./View";
import SettingsForm from "./SettingsForm";

const SettingsView = () => (
	<View title='Settings' description='Customize your settings.'>
		<SettingsForm />
	</View>
);

export default SettingsView;
