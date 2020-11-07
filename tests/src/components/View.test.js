import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/configureStore";
import View from "../../../src/components/View";
import { setUser } from "../../../src/actions/user";

const wrappedView = (
	<Provider store={store}>
		<MemoryRouter>
			<View title='Test' description='Tests the view component.' />
		</MemoryRouter>
	</Provider>
);

describe("<View>", () => {
	test("renders correctly", () => {
		const wrapper = shallow(wrappedView);
		expect(wrapper).toMatchSnapshot();
	});

	test("renders log in link by default", () => {
		const wrapper = mount(wrappedView);
		expect(wrapper.find(Link).prop("to")).toBe("/login");
	});

	test("renders link to home when logged in", () => {
		store.dispatch(setUser({ username: "testName" }));
		const wrapper = mount(wrappedView);
		expect(wrapper.find(Link).prop("to")).toBe("/");
	});
});
