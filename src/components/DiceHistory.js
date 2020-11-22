import React from "react";
import { connect } from "react-redux";
import DiceHistoryItem from "./DiceHistoryItem";

export const DiceHistory = (props) => (
	<div className='DiceHistory'>
		{props.history.map((data) => (
			<DiceHistoryItem key={`${data.name}:${data.time.valueOf()}`} {...data} />
		))}
	</div>
);

const mapStateToProps = (state) => ({
	history: state.dice.history,
});

export default connect(mapStateToProps)(DiceHistory);
