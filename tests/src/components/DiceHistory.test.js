import React from "react";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import store from "../../../src/store/configureStore";
import DiceHistory from "../../../src/components/DiceHistory";
import { rollDice } from "../../../src/actions/dice";

describe("<DiceHistory>", () => {
	test("renders correctly with empty history", () => {
		const wrapper = mount(
			<Provider store={store}>
				<DiceHistory />
			</Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test("renders correctly with populated history", () => {
		store.dispatch(
			rollDice({
				rolls: [1, 3, 4],
				number: 3,
				sides: 6,
				modifier: 0,
				total: 8,
				time: new Date(0),
				name: "Testname",
			})
		);
		const wrapper = mount(
			<Provider store={store}>
				<DiceHistory />
			</Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
