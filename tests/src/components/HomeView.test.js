import React from "react";
import { shallow } from "enzyme";
import HomeView from "../../../src/components/HomeView";

describe("<HomeView>", () => {
	test("renders correctly", () => {
		const wrapper = shallow(<HomeView />);
		expect(wrapper).toMatchSnapshot();
	});
});
