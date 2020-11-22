import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	name: PropTypes.string.isRequired,
	time: PropTypes.instanceOf(Date).isRequired,
	total: PropTypes.number.isRequired,
	number: PropTypes.number.isRequired,
	sides: PropTypes.number.isRequired,
	modifier: PropTypes.number.isRequired,
	rolls: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const DiceHistoryItem = (props) => (
	<div className='DiceHistoryItem'>
		<div className='DiceHistoryItem-overview'>
			{props.time.toLocaleTimeString()}: <span className='accent'>{props.name}</span> rolled{" "}
			<span className='accent'>{props.total}</span>
		</div>
		<div className='DiceHistoryItem-details'>
			{props.number}d{props.sides}: {props.rolls.join(", ")} + {props.modifier}
		</div>
	</div>
);

DiceHistoryItem.propTypes = propTypes;

export default DiceHistoryItem;
