import React from "react";
import { connect } from "react-redux";

export const DiceHistory = (props) => (
	<div className='dice-history'>
		{props.history.map((data) => (
			<div key={`${data.name}:${data.time.valueOf()}`} className='dice-history__item'>
				<div className='bold text-m'>
					{data.time.toLocaleTimeString()}: <span className='accent'>{data.name}</span>{" "}
					rolled <span className='accent'>{data.total}</span>!
				</div>
				<div className='italic text-s'>
					{data.number}d{data.sides}: {data.rolls.join(", ")} +{data.modifier}
				</div>
			</div>
		))}
	</div>
);

const mapStateToProps = (state) => ({
	history: state.dice.history,
});

export default connect(mapStateToProps)(DiceHistory);
