import React from "react";
import DiceForm from "./DiceForm";
import DiceHistory from "./DiceHistory";
import View from "./View";

const DiceView = () => (
	<View
		title='Dice'
		description='Customize your dice rolls and share your rolls with everyone in the room.'
	>
		<div className='dice-container'>
			<DiceForm />
			<DiceHistory />
		</div>
	</View>
);

export default DiceView;
