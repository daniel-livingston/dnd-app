import React from "react";
import { shallow } from "enzyme";
import { Home } from "../../../src/components/Home";

describe("<Home>", () => {
	test("renders correctly", () => {
		const wrapper = shallow(<Home />);
		expect(wrapper).toMatchSnapshot();
	});
});
