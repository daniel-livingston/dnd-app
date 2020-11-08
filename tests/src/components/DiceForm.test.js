import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import DiceForm from "../../../src/components/DiceForm";
import store from "../../../src/store/configureStore";

// TODO: Test functions

describe("<DiceForm>", () => {
	test("renders correctly", () => {
		const wrapper = mount(
			<Provider store={store}>
				<DiceForm />
			</Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
