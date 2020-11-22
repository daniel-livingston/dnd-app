import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import {
	addToHistory,
	rollDice,
	updateDiceNumber,
	updateDiceModifier,
	updateDiceSides,
} from "../actions/dice";
import { DEFAULT_DICE_NUMBERS, DEFAULT_DICE_SIDES } from "../constants";

export class DiceForm extends React.Component {
	onNumberSelect = (e) => {
		const value = parseInt(e.target.value, 10);
		this.props.updateNumber(value);
	};
	onSidesSelect = (e) => {
		const value = parseInt(e.target.value, 10);
		this.props.updateSides(value);
	};
	onModifierChange = (e) => {
		const value = parseInt(e.target.value, 10);
		this.props.updateModifier(value);
	};
	onSubmit = () => {
		document.getElementById("DiceForm-Button").setAttribute("disabled", "disabled");

		const rolls = [];
		let total = 0;
		for (let i = 0; i < this.props.number; i++) {
			const roll = Math.floor(Math.random() * this.props.sides + 1);
			rolls.push(roll);
			total += roll;
		}
		total += this.props.modifier;

		const roll = {
			rolls,
			number: this.props.number,
			sides: this.props.sides,
			modifier: this.props.modifier,
			total,
			time: new Date(),
			name: this.props.name || "Guest",
		};

		this.props.rollDice(roll);
		setTimeout(() => {
			document.getElementById("DiceForm-Button").removeAttribute("disabled");
		}, 100);
	};
	render() {
		return (
			<Form
				className='DiceForm'
				header='Dice Roller'
				items={[
					{
						title: "Number",
						description: "Choose the number of dice to roll.",
						inputType: "select",
						inputValue: this.props.number,
						inputOnChange: this.onNumberSelect,
						inputPlaceholder: "Number",
						selectOptions: DEFAULT_DICE_NUMBERS,
					},
					{
						title: "Sides",
						description: "Choose the number of sides for the dice.",
						inputType: "select",
						inputValue: this.props.sides,
						inputOnChange: this.onSidesSelect,
						inputPlaceholder: "Sides",
						selectOptions: DEFAULT_DICE_SIDES,
					},
					{
						title: "Modifier",
						description: "Choose the modifier for the roll.",
						inputType: "number",
						inputValue: this.props.modifier,
						inputOnChange: this.onModifierChange,
						inputPlaceholder: "Modifier",
					},
				]}
				button={{
					id: "DiceForm-Button",
					onClick: this.onSubmit,
					name: "Roll dice",
				}}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	number: state.dice.number,
	sides: state.dice.sides,
	modifier: state.dice.modifier,
	last: state.dice.last,
	name: state.user.username,
});

const mapDispatchToProps = (dispatch) => ({
	addToHistory: (roll) => dispatch(addToHistory(roll)),
	rollDice: (roll) => dispatch(rollDice(roll)),
	updateNumber: (number) => dispatch(updateDiceNumber(number)),
	updateSides: (sides) => dispatch(updateDiceSides(sides)),
	updateModifier: (modifier) => dispatch(updateDiceModifier(modifier)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiceForm);
